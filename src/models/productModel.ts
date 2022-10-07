import { RowDataPacket } from 'mysql2';
import { ResultSetHeader, Pool } from 'mysql2/promise';
import conn from './connection';
import Product from '../interfaces/productInterface';

class ProductModel {
  connection: Pool;

  constructor() {
    this.connection = conn;
  }

  create = async (product: Product): Promise<Product> => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?,?)';
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  };

  findAll = async () => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute<RowDataPacket[]>(query);
    return products;
  };
}

export default ProductModel;