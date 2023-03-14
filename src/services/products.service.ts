import productModel from '../models/products.model';
import { NewProduct } from '../interfaces';

const createProduct = async (product: NewProduct) => {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
};

const getAll = async () => {
  const allProducts = await productModel.getAllProducts();
  return allProducts;
};

const productService = { createProduct, getAll };
export default productService;