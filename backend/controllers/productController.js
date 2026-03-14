import { poolPromise } from "../db.js"

////////////////////////
// GET PARTS
////////////////////////
export const getParts = async (req, res) => {

  const { brand, model, part_type } = req.query

  try {

    const pool = await poolPromise

    let query = "SELECT * FROM parts WHERE 1=1"
    let params = []

    if (brand) {
      query += " AND brand = ?"
      params.push(brand)
    }

    if (model) {
      query += " AND model = ?"
      params.push(model)
    }

    if (part_type) {
      query += " AND part_type = ?"
      params.push(part_type)
    }

    const [rows] = await pool.query(query, params)

    res.json(rows)

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to get parts" })

  }

}

////////////////////////
// ADD PART
////////////////////////
export const createPart = async (req, res) => {

  const { shop_id, name, brand, model, part_type, price, stock, description } = req.body

  try {

    const pool = await poolPromise

    await pool.query(
      `INSERT INTO parts
      (shop_id,name,brand,model,part_type,price,stock,description)
      VALUES (?,?,?,?,?,?,?,?)`,
      [shop_id, name, brand, model, part_type, price, stock, description]
    )

    res.json({
      message: "Part added successfully"
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to add part" })

  }

}

////////////////////////
// UPDATE PART
////////////////////////
export const updatePart = async (req, res) => {

  const { id } = req.params

  const { name, brand, model, part_type, price, stock, description } = req.body

  try {

    const pool = await poolPromise

    await pool.query(
      `UPDATE parts
       SET name=?,brand=?,model=?,part_type=?,price=?,stock=?,description=?
       WHERE id=?`,
      [name, brand, model, part_type, price, stock, description, id]
    )

    res.json({
      message: "Part updated"
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to update part" })

  }

}

////////////////////////
// DELETE PART
////////////////////////
export const deletePart = async (req, res) => {

  const { id } = req.params

  try {

    const pool = await poolPromise

    await pool.query(
      "DELETE FROM parts WHERE id=?",
      [id]
    )

    res.json({
      message: "Part deleted"
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({ error: "Failed to delete part" })

  }

}