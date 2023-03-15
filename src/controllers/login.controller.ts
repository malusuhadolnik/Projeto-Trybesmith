import { Request, Response } from 'express';
import loginService from "../services/login.service";

const login = async (req: Request, res: Response) => {
  const { body } = req;
  const token = await loginService.login(body);
  res.status(200).json({ token });
};

const loginController = { login };
export default loginController;