import { RowDataPacket } from 'mysql2';
import connection from './connection';

class ProductModel {
  findAll = async () => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await connection.execute<RowDataPacket[]>(query);
    return products;
  };
}

export default ProductModel;