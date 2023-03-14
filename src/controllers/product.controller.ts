import { Request, Response } from 'express';
import productService from '../services/products.service';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = req.body;
  const { name, amount } = req.body;
  if (!name || !amount) {
    return res.status(400).json({ message: '"name" and "amount" must be provided' });
  }
  const createdProduct = await productService.createProduct(newProduct);
  return res.status(201).json(createdProduct);
};

const productController = { createProduct };
export default productController;