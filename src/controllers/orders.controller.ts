import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const getOrders = async (_req: Request, res: Response) => {
  const allOrders = await orderService.getAllOrders();
  if (!allOrders) {
    return res.status(404).json({ message: 'no order was found' });
  }
  return res.status(200).json(allOrders);

};

const orderController = { getOrders };
export default orderController;