import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

//create a product
router.post("/products", ProductController.createProductToDB);
//get products
router.get("/products", ProductController.getProductsFromDB);
//get single product
router.get("/products/:productId", ProductController.getSingleProductFromDB);
//update product
router.put("/products/:productId", ProductController.updateProductToDB)
//update product
router.delete("/products/:productId", ProductController.deleteOneProductFromDB)


export const ProductRouter = router;