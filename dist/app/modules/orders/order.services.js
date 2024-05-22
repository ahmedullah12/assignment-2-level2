"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const order_model_1 = require("./order.model");
const createOrder = (order) => {
    const result = order_model_1.Order.create(order);
    return result;
};
const getOrder = () => {
    const result = order_model_1.Order.find();
    return result;
};
const getOrderWithEmail = (email) => {
    const result = order_model_1.Order.find({ email: email });
    return result;
};
exports.OrderServices = {
    createOrder,
    getOrder,
    getOrderWithEmail,
};
