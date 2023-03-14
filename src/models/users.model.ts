import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { NewUser, User } from '../interfaces';

const createUser = async (user:NewUser) : Promise<NewUser> => {
  const { username, vocation, level, password } = user;
  
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const { insertId: id } = result;
  const newUser: User = { id, ...user };
  return newUser;
};

const userModel = { createUser };
export default userModel;
