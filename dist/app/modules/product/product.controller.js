"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_services_1 = require("./product.services");
const product_zod_validation_1 = __importDefault(require("./product.zod.validation"));
// product creating
const createProductToDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const zodParseData = product_zod_validation_1.default.parse(product);
        const result = yield product_services_1.ProductServices.createMovie(zodParseData);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (err) {
        res
            .status(500)
            .json({
            success: false,
            message: 'Product creating failed.',
            error: err,
        });
    }
});
const getProductsFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        if (searchTerm) {
            const result = yield product_services_1.ProductServices.getProductsWithSearchTerm(searchTerm);
            if (result.length > 0) {
                res
                    .status(200)
                    .json({
                    success: true,
                    message: `Products matching search term ${searchTerm} fetched successfully!`,
                    data: result,
                });
                return;
            }
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        const result = yield product_services_1.ProductServices.getProducts();
        res
            .status(200)
            .json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        res
            .status(500)
            .json({
            success: false,
            message: 'Failed to fetch products',
            error: err,
        });
    }
});
const getSingleProductFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_services_1.ProductServices.getSingleProduct(id);
        res
            .status(200)
            .json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        res
            .status(500)
            .json({ success: false, message: 'Failed to fetch product', error: err });
    }
});
const updateProductToDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const product = req.body;
        const zodParseData = product_zod_validation_1.default.parse(product);
        const result = yield product_services_1.ProductServices.updateProduct(id, zodParseData);
        res
            .status(200)
            .json({
            success: true,
            message: 'Product updated successfully!',
            data: zodParseData,
        });
    }
    catch (err) {
        res
            .status(500)
            .json({
            success: false,
            message: 'Failed to update the product',
            error: err,
        });
    }
});
const deleteOneProductFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_services_1.ProductServices.deleteOneProduct(id);
        res
            .status(200)
            .json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    }
    catch (err) {
        res
            .status(500)
            .json({
            success: false,
            message: 'Failed to delete the product',
            error: err,
        });
    }
});
exports.ProductController = {
    createProductToDB,
    getProductsFromDB,
    getSingleProductFromDB,
    updateProductToDB,
    deleteOneProductFromDB,
};
