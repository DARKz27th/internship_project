import { poolPromise } from "../db.js"

////////////////////
// ADD TO CART
////////////////////
export const addToCart = async (req, res) => {

  const user_id = req.user.id
  const { part_id, quantity } = req.body

  try {

    const pool = await poolPromise

    // เช็คว่ามีสินค้าใน cart แล้วหรือยัง
    const [exist] = await pool.query(
      "SELECT * FROM cart WHERE user_id=? AND part_id=?",
      [user_id, part_id]
    )

    if (exist.length > 0) {

      // ถ้ามีแล้ว เพิ่ม quantity
      await pool.query(
        "UPDATE cart SET quantity = quantity + ? WHERE user_id=? AND part_id=?",
        [quantity, user_id, part_id]
      )

    } else {

      // ถ้ายังไม่มี เพิ่มใหม่
      await pool.query(
        "INSERT INTO cart (user_id, part_id, quantity) VALUES (?,?,?)",
        [user_id, part_id, quantity]
      )

    }

    res.json({
      message: "Added to cart"
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to add cart" })

  }

}

////////////////////
// GET CART
////////////////////
export const getCart = async (req, res) => {

  const user_id = req.user.id

  try {

    const pool = await poolPromise

    const [rows] = await pool.query(
      `SELECT 
        cart.id,
        parts.id AS part_id,
        parts.name,
        parts.price,
        cart.quantity
      FROM cart
      JOIN parts ON cart.part_id = parts.id
      WHERE cart.user_id = ?`,
      [user_id]
    )

    res.json(rows)

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to get cart" })

  }

}

////////////////////
// UPDATE CART QTY
////////////////////
export const updateCart = async (req, res) => {

  const { id } = req.params
  const { quantity } = req.body

  try {

    const pool = await poolPromise

    await pool.query(
      "UPDATE cart SET quantity=? WHERE id=? AND user_id=?",
      [quantity, id, req.user.id]
    )

    res.json({
      message: "Cart updated"
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to update cart" })

  }

}

////////////////////
// REMOVE CART ITEM
////////////////////
export const removeCart = async (req, res) => {

  const { id } = req.params

  try {

    const pool = await poolPromise

    await pool.query(
      "DELETE FROM cart WHERE id=? AND user_id=?",
      [id, req.user.id]
    )

    res.json({
      message: "Cart removed"
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to remove cart" })

  }

}

////////////////////
// CLEAR CART
////////////////////
export const clearCart = async (req, res) => {

  try {

    const pool = await poolPromise

    await pool.query(
      "DELETE FROM cart WHERE user_id=?",
      [req.user.id]
    )

    res.json({
      message: "Cart cleared"
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to clear cart" })

  }

}