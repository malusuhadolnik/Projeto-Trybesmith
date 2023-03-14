import productModel from "../models/products.model";
import { Product } from '../interfaces';

const createProduct = async (product: Product) => {
  const newProduct = await productModel.createProduct(product);
  if (!newProduct) {
    return { status: 404, error: { message: 'product not found' } };
  }
  return newProduct;
};

const userService = { createProduct };
export default userService;