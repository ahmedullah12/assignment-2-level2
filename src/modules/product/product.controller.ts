import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import productSchema from "./product.zod.validation";

// product creating
const createProductToDB = async(req: Request, res: Response) => {
    try{
        
        const product = req.body;
        const zodParseData = productSchema.parse(product);

        const result = await ProductServices.createMovie(zodParseData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        })

    }catch(err){
        res.status(500).json({ success: false, message: "Product creating failed.", error: err });
    }
};

const getProductsFromDB = async(req: Request, res: Response) => {
    try{
        const result = await ProductServices.getProducts();
        res.status(200).json({success: true, message: "Products fetched successfully!", data: result})
    }catch(err){
        res.status(500).json({ success: false, message: "Failed to fetch products", error: err });
    }
};

const getSingleProductFromDB = async(req: Request, res: Response) => {
    try{
        const id = req.params.productId;
        const result = await ProductServices.getSingleProduct(id);
        res.status(200).json({success: true, message: "Product fetched successfully!", data: result})
    }catch(err){
        res.status(500).json({ success: false, message: "Failed to fetch product", error: err });
    }
}

export const ProductController = {
    createProductToDB,
    getProductsFromDB,
    getSingleProductFromDB
}