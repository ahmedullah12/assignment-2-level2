import { Request, Response } from 'express';
import { Order } from './order.model';
import { OrderServices } from './order.services';
import { Product } from '../product/product.model';

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
    const product = await Product.findById(order.productId);

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
    const updatedProduct = await product.save();

    const result = await OrderServices.createOrder(order);
    return res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'Order create failed', error: err });
  }
};

const getOrderFromDB = async(req: Request, res: Response) => {
  const result = await OrderServices.getOrder();
  res.status(200).json({success: true, message: "Orders fetched successfully!", data: result})
}

export const OrderController = {
  createOrderToDB,
  getOrderFromDB
};
