import { Request, Response } from 'express';
import userService from '../services/users.service';

const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const { username, vocation, level, password } = user;
  if (!username || !vocation || !level || !password) {
    return res.status(400).json({ message: 'some fileds are missing' });
  }
  const token = await userService.createUser(user);
  return res.status(201).json({ token });
};

const userController = { createUser };
export default userController;