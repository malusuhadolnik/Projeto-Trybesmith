import connection from './connection';
import { ResultSetHeader } from 'mysql2';
import { Product, NewProduct} from '../interfaces';

const createProduct = async (product: NewProduct) : Promise<Product> => {
  const { name, amount } = product;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO products (name, amount) VALUES (?, ?)',
        [name, amount]
  );
  const { insertId: id } = result;
  const newProduct: Product = { id, name, amount};
  return newProduct;
}

const productModel = { createProduct };
export default productModel;