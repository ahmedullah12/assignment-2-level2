import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

//create a product
router.post("/products", ProductController.createProductToDB);
//get products
router.get("/products", ProductController.getProductsFromDB);



export const ProductRouter = router;