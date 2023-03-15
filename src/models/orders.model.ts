import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../interfaces';

const listAllOrders = async (): Promise<Order[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & Order[]>(
    `SELECT ord.id, ord.user_id AS userId, JSON_ARRAYAGG(prod.id) AS 'productsIds'
    FROM Trybesmith.orders AS ord
    INNER JOIN Trybesmith.products AS prod
    ON ord.id = prod.order_id
    GROUP BY ord.id`,
  );
  return rows;
};

const orderModel = { listAllOrders };
export default orderModel;