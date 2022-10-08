import { Pool } from 'mysql2/promise';
import Login from '../interfaces/loginInterface';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(login: Login): Promise<Login> {
    const { username, password } = login;
    const query = `SELECT * FROM Trybesmith.Users
      WHERE username = ? AND password = ?`;
    const [result] = await this.connection.execute(query, [username, password]);
    const [user] = result as Login[];
    return user;
  }
}

export default LoginModel;