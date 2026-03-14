import express from "express"

import {
  addToCart,
  getCart,
  updateCart,
  removeCart,
  clearCart
} from "../controllers/cartController.js"

import { authMiddleware } from "../middleware/authMiddleware.js"

const router = express.Router()

// add
router.post("/cart", authMiddleware, addToCart)

// get
router.get("/cart", authMiddleware, getCart)

// update qty
router.put("/cart/:id", authMiddleware, updateCart)

// remove item
router.delete("/cart/:id", authMiddleware, removeCart)

// clear cart
router.delete("/cart", authMiddleware, clearCart)

export default router