"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
//create a product
router.post("/products", product_controller_1.ProductController.createProductToDB);
//get products
router.get("/products", product_controller_1.ProductController.getProductsFromDB);
//get single product
router.get("/products/:productId", product_controller_1.ProductController.getSingleProductFromDB);
//update product
router.put("/products/:productId", product_controller_1.ProductController.updateProductToDB);
exports.ProductRouter = router;
