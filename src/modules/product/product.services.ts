import { Types } from "mongoose";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createMovie = async(product: TProduct) => {
    const result = await Product.create(product);
    return result;
};

const getProducts = async() => {
    const result = await Product.find();
    return result;
};

const getSingleProduct = async(productId: string) => {
    const result = await Product.findOne({_id: new Types.ObjectId(productId)});
    return result;
}

export const ProductServices = {
    createMovie,
    getProducts,
    getSingleProduct,
}