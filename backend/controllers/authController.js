import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { poolPromise } from "../db.js"

const SECRET = "supersecretkey"

////////////////////
// REGISTER
////////////////////
export const register = async (req, res) => {

  const { username, email, password } = req.body

  try {

    const hashedPassword = await bcrypt.hash(password, 10)

    const pool = await poolPromise

    await pool.query(
      "INSERT INTO users (username,email,password) VALUES (?,?,?)",
      [username, email, hashedPassword]
    )

    res.json({
      message: "Register success"
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({
      error: "Register failed"
    })

  }

}

////////////////////
// LOGIN
////////////////////
export const login = async (req, res) => {

  const { email, password } = req.body

  try {

    const pool = await poolPromise

    const [rows] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    )

    const user = rows[0]

    if (!user) {
      return res.status(401).json({
        error: "users or password is wrong!!!"
      })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return res.status(401).json({
        error: "users or password is wrong!!!"
      })
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role
      },
      SECRET,
      { expiresIn: "1d" }
    )

    res.json({
      message: "Login success",
      token
    })

  } catch (err) {

    console.log(err)
    res.status(500).json({
      error: "Login failed"
    })

  }

}