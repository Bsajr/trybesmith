import { RowDataPacket, Pool } from 'mysql2/promise';
import conn from './connection';
import Order from '../interfaces/orderInterface';

class OrderModel {
  public connection: Pool;

  constructor() {
    this.connection = conn;
  }

  public getAll = async (): Promise<Order[]> => {
    const query = `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS productsIds
    FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS prod
    ON ord.id = prod.orderId
    GROUP BY ord.id`;
    const orders = await this.connection.execute<RowDataPacket[]>(query);
    const [rows] = orders;
    return rows as Order[];
  };
}

export default OrderModel;