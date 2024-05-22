import { Request, Response } from 'express';
import { Order } from './order.model';
import { OrderServices } from './order.services';

const createOrderToDB = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const isProductValid = await Order.isProductValid(order.productId);
    if (!isProductValid) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is not a valid product ID',
      });
    }

    const result = await OrderServices.createOrder(order);
    res.status(200).json({success: false, message: "Order created successfully!", data: result})

  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'Order create failed', error: err });
  }
};

export const OrderController = {
    createOrderToDB,
}
