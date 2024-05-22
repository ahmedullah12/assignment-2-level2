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
        const result = yield order_services_1.OrderServices.createOrder(order);
        res.status(200).json({ success: false, message: "Order created successfully!", data: result });
    }
    catch (err) {
        res
            .status(500)
            .json({ success: false, message: 'Order create failed', error: err });
    }
});
exports.OrderController = {
    createOrderToDB,
};
