import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleWare.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/products", productRouter);

// middleware error custom error handling
app.use(notFound);

// middleware error custom error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
