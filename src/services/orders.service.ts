import orderModel from "../models/orders.model";
import { Order } from '../interfaces';

const getAllOrders = async () => {
    const allProducts = await orderModel.listAllOrders();
    return allProducts;
  };

  const orderService = { getAllOrders };
  export default orderService;