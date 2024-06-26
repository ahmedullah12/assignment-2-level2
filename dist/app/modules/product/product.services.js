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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("./product.model");
const createMovie = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(product);
    return result;
});
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find();
    return result;
});
const getProductsWithSearchTerm = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {
        $or: [
            { name: { $regex: searchTerm, $options: 'ix' } },
            { category: { $regex: searchTerm, $options: 'ix' } },
            { description: { $regex: searchTerm, $options: 'ix' } },
        ],
    };
    const result = yield product_model_1.Product.find(filter);
    return result;
});
const getSingleProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOne({ _id: new mongoose_1.Types.ObjectId(productId) });
    return result;
});
const updateProduct = (productId, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.updateOne({ _id: new mongoose_1.Types.ObjectId(productId) }, updatedProduct);
    return result;
});
const deleteOneProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.deleteOne({
        _id: new mongoose_1.Types.ObjectId(productId),
    });
    return result;
});
exports.ProductServices = {
    createMovie,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteOneProduct,
    getProductsWithSearchTerm,
};
