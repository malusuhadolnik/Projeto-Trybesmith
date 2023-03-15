import connection from './connection';
import { User} from '../interfaces';

const getUserByUsername = async(username: string): Promise<User> => {
  const [data]= await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  const [user] = data as User[];
  return user || null;
};

const loginModel = { getUserByUsername };
export default loginModel;
