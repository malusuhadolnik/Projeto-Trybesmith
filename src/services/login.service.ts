import jwt, { SignOptions } from 'jsonwebtoken';
import loginModel from '../models/login.model';
import { UserCredentials } from '../interfaces';

const JWT_SECRET = 'secret' || 'MySecretPassword';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1440m',
};

const login = async (credentials: UserCredentials) => {
  const { username } = credentials;
  const theUser = await loginModel.getUserByUsername(username);
  console.log(theUser);
  if (theUser === null || theUser.password !== credentials.password) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }
  const token = jwt.sign({ theUser }, JWT_SECRET, JWT_CONFIG);
  return { status: 200, data: { token } };
};

// código desenvolvido com auxílio do script praticando-typescript-express/atividade1, do repo de Rafael Medeiros Gomes
// e com ajuda de Gabriela Ventura - Turma 25B

const loginService = { login };
export default loginService;