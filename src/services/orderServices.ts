import OrderModel from '../models/orderModel';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll() {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrderService;