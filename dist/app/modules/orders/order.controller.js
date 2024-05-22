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
exports.OrderController = void 0;
const order_model_1 = require("./order.model");
const order_services_1 = require("./order.services");
const product_model_1 = require("../product/product.model");
const createOrderToDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const isProductValid = yield order_model_1.Order.isProductValid(order.productId);
        if (!isProductValid) {
            return res.status(400).json({
                success: false,
                message: 'Product ID is not a valid product ID',
            });
        }
        const product = yield product_model_1.Product.findById(order.productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
        if (order.quantity > product.inventory.quantity) {
            return res.status(400).json({
                success: false,
                message: 'Insufficient quantity available in inventory',
            });
        }
        product.inventory.quantity -= order.quantity;
        product.inventory.inStock = product.inventory.quantity > 0;
        const updatedProduct = yield product.save();
        const result = yield order_services_1.OrderServices.createOrder(order);
        return res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    }
    catch (err) {
        res
            .status(500)
            .json({ success: false, message: 'Order create failed', error: err });
    }
});
const getOrderFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    if (email) {
        const result = yield order_services_1.OrderServices.getOrderWithEmail(email);
        if (result.length > 0) {
            res
                .status(200)
                .json({
                success: true,
                message: 'Orders fetched successfully for user email!',
                data: result,
            });
            return;
        }
        return res.status(404).json({ success: false, message: 'Order not found' });
    }
    const result = yield order_services_1.OrderServices.getOrder();
    res
        .status(200)
        .json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
    });
});
exports.OrderController = {
    createOrderToDB,
    getOrderFromDB,
};
