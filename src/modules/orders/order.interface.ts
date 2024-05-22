import { Model } from "mongoose";

export type TOrder = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};


// type for isProductValid
export interface isProductValid extends Model<TOrder>{
  isProductValid(productId: string): Promise<boolean>;
}


