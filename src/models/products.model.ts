import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product, NewProduct } from '../interfaces';

const createProduct = async (product: NewProduct) : Promise<Product> => {
  const { name, amount } = product;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId: id } = result;
  const newProduct: Product = { id, name, amount };
  return newProduct;
};

const getAllProducts = async (): Promise<Product[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & Product[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return rows;
};

const productModel = { createProduct, getAllProducts };
export default productModel;