import { Schema, model } from "mongoose";
import { TOrder, isProductValid } from "./order.interface";
import { Product } from "../product/product.model";

const orderSchema = new Schema<TOrder, isProductValid>({
    email: {type: String, required: true},
    productId: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
});

//returns true if product is valid
orderSchema.statics.isProductValid = async function(productId: string): Promise<boolean> {
      const product = await Product.findById(productId);
      return !!product;
   
  };


export const Order = model<TOrder, isProductValid>("Order", orderSchema);