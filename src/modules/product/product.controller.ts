import { Request, Response } from 'express';
import { ProductServices } from './product.services';
import productSchema from './product.zod.validation';

// product creating
const createProductToDB = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const zodParseData = productSchema.parse(product);

    const result = await ProductServices.createMovie(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: 'Product creating failed.',
        error: err,
      });
  }
};

const getProductsFromDB = async (req: Request, res: Response) => {
  try {
    const searchTerm: string | undefined = req.query.searchTerm as string;
    if (searchTerm) {
      const result =
        await ProductServices.getProductsWithSearchTerm(searchTerm);
      if (result.length > 0) {
        res
          .status(200)
          .json({
            success: true,
            message: `Products matching search term ${searchTerm} fetched successfully!`,
            data: result,
          });
        return;
      }
      return res.status(404).json({success: false, message: "Product not found"})
    }

    const result = await ProductServices.getProducts();
    res
      .status(200)
      .json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: 'Failed to fetch products',
        error: err,
      });
  }
};

const getSingleProductFromDB = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await ProductServices.getSingleProduct(id);
    res
      .status(200)
      .json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'Failed to fetch product', error: err });
  }
};

const updateProductToDB = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const product = req.body;
    const zodParseData = productSchema.parse(product);
    const result = await ProductServices.updateProduct(id, zodParseData);
    res
      .status(200)
      .json({
        success: true,
        message: 'Product updated successfully!',
        data: zodParseData,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: 'Failed to update the product',
        error: err,
      });
  }
};

const deleteOneProductFromDB = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await ProductServices.deleteOneProduct(id);
    res
      .status(200)
      .json({
        success: true,
        message: 'Product deleted successfully!',
        data: null,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: 'Failed to delete the product',
        error: err,
      });
  }
};

export const ProductController = {
  createProductToDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateProductToDB,
  deleteOneProductFromDB,
};
