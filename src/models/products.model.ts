import connection from './connection';
import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces';

const createProduct = async (product: Product) : Promise<Product> => {
  const { name, amount } = product;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO books (name, amount) VALUES (?, ?)',
        [name, amount]
  );
  const { insertId: id } = result;
  const newProduct: Product = { id, name, amount};
  return newProduct;
}

const productModel = { createProduct };
export default productModel;