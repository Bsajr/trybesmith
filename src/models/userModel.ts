import { ResultSetHeader, Pool } from 'mysql2/promise';
import connection from './connection';
import User from '../interfaces/userInterface';

class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  create = async (user: User): Promise<User> => {
    const { username, classe, level, password } = user;
    const qr = 'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES(?,?,?,?)';
    const result = await connection.execute<ResultSetHeader>(
      qr,
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  };
}

export default UserModel;