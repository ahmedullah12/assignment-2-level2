import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = (order: TOrder) => {
    const result = Order.create(order);
    return result;
};


export const OrderServices = {
    createOrder
}