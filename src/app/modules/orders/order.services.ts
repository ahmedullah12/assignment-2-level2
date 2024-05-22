import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = (order: TOrder) => {
  const result = Order.create(order);
  return result;
};

const getOrder = () => {
  const result = Order.find();
  return result;
};

const getOrderWithEmail = (email: string) => {
  const result = Order.find({ email: email });
  return result;
};

export const OrderServices = {
  createOrder,
  getOrder,
  getOrderWithEmail,
};
