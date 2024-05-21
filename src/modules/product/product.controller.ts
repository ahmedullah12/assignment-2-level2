import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import productSchema from "./product.zod.validation";

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

export const ProductController = {
    createProductToDB,
}