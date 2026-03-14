import express from "express"

import {
  getParts,
  createPart,
  updatePart,
  deletePart
} from "../controllers/productController.js"

import { authMiddleware } from "../middleware/authMiddleware.js"
import { adminMiddleware } from "../middleware/adminMiddleware.js"

const router = express.Router()

router.get("/parts", getParts)

router.post(
  "/parts",
  authMiddleware,
  adminMiddleware,
  createPart
)

router.put(
  "/parts/:id",
  authMiddleware,
  adminMiddleware,
  updatePart
)

router.delete(
  "/parts/:id",
  authMiddleware,
  adminMiddleware,
  deletePart
)

export default router