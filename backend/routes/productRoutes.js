import express from "express";
// express-async-handler used for route errors
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @dec       fetch all products
// @route     GET /api/products
// @access    Public route
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
// @dec       fetch single product
// @route     GET /api/products/:id
// @access    Public route
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
