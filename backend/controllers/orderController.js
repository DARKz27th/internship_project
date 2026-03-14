import { poolPromise } from "../db.js"

////////////////////////
// CHECKOUT
////////////////////////
export const checkout = async (req, res) => {

  const user_id = req.user.id

  try {

    const pool = await poolPromise

    // ดึง cart
    const [cart] = await pool.query(
      `SELECT cart.part_id, cart.quantity, parts.price, parts.stock
       FROM cart
       JOIN parts ON cart.part_id = parts.id
       WHERE cart.user_id = ?`,
      [user_id]
    )

    if (cart.length === 0) {
      return res.status(400).json({ error: "Cart empty" })
    }

    let total = 0

    cart.forEach(item => {
      total += item.price * item.quantity
    })

    // สร้าง order
    const [orderResult] = await pool.query(
      "INSERT INTO orders (user_id,total_price) VALUES (?,?)",
      [user_id, total]
    )

    const order_id = orderResult.insertId

    // เพิ่ม order items
    for (let item of cart) {

      // เช็ค stock
      if (item.quantity > item.stock) {
        return res.status(400).json({
          error: `Stock not enough for part ${item.part_id}`
        })
      }

      // add order item
      await pool.query(
        `INSERT INTO order_items
        (order_id,part_id,quantity,price)
        VALUES (?,?,?,?)`,
        [order_id, item.part_id, item.quantity, item.price]
      )

      // ลด stock
      await pool.query(
        `UPDATE parts
         SET stock = stock - ?
         WHERE id = ?`,
        [item.quantity, item.part_id]
      )
    }

    // ลบ cart
    await pool.query(
      "DELETE FROM cart WHERE user_id=?",
      [user_id]
    )

    res.json({
      message: "Order created",
      order_id: order_id
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Checkout failed" })

  }

}

////////////////////////
// GET ORDERS
////////////////////////
export const getOrders = async (req, res) => {

  const user_id = req.user.id

  try {

    const pool = await poolPromise

    const [orders] = await pool.query(
      "SELECT * FROM orders WHERE user_id=?",
      [user_id]
    )

    res.json(orders)

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to get orders" })

  }
}
  ////////////////////////
// GET ALL ORDERS (ADMIN)
////////////////////////
export const getAllOrders = async (req, res) => {

  try {

    const pool = await poolPromise

    const [orders] = await pool.query(
      `SELECT orders.id, users.username, orders.total_price, orders.status, orders.created_at
       FROM orders
       JOIN users ON orders.user_id = users.id
       ORDER BY orders.created_at DESC`
    )

    res.json(orders)

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to get orders" })

  }

}

////////////////////////
// UPDATE ORDER STATUS
////////////////////////
export const updateOrderStatus = async (req, res) => {

  const { id } = req.params
  const { status } = req.body

  try {

    const pool = await poolPromise

    await pool.query(
      "UPDATE orders SET status=? WHERE id=?",
      [status, id]
    )

    res.json({
      message: "Order status updated"
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to update status" })

  }

}