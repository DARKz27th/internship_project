import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js"


const app = express();

app.use(cors());
app.use(express.json());

const SECRET = "supersecretkey";

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/api", productRoutes)
app.use("/api",cartRoutes)
app.use("/api", orderRoutes)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});