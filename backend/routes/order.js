import express from "express"

import {
  addToCart,
  getCart,
  removeCart
} from "../controllers/cartController.js"

import { authMiddleware } from "../middleware/authMiddleware.js"
import { adminMiddleware } from "../middleware/adminMiddleware.js"

import {
  checkout,
  getOrders,
  getAllOrders,
  updateOrderStatus
} from "../controllers/orderController.js"

const router = express.Router()

/////////////////
// CART
/////////////////

router.post("/cart", authMiddleware, addToCart)

router.get("/cart", authMiddleware, getCart)

router.delete("/cart/:id", authMiddleware, removeCart)

/////////////////
// ORDER USER
/////////////////

router.post("/checkout", authMiddleware, checkout)

router.get("/orders", authMiddleware, getOrders)

/////////////////
// ADMIN
/////////////////

router.get("/admin/orders", authMiddleware, adminMiddleware, getAllOrders)

router.put(
  "/admin/orders/:id/status",
  authMiddleware,
  adminMiddleware,
  updateOrderStatus
)

export default router