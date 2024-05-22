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
exports.OrderServices = {
    createOrder,
    getOrder
};
