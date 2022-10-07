import { Request, Response } from 'express';
import OrderService from '../services/orderServices';

class OrderController {
  constructor(private orderservice: OrderService) { }

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.orderservice.getAll();
    res.status(200).json(orders);
  };
}

export default OrderController;