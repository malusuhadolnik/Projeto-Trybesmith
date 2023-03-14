import productModel from '../models/products.model';
import { NewProduct } from '../interfaces';

const createProduct = async (product: NewProduct) => {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
};

const productService = { createProduct };
export default productService;