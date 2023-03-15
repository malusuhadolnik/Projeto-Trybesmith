import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { User} from '../interfaces';

const getUserByUsername = async(username: string): Promise<User[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & User[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return rows;
};

const loginModel = { getUserByUsername };
export default loginModel;
