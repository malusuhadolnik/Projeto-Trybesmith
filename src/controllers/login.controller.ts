import { Request, Response } from 'express';
import loginService from "../services/login.service";

const login = async (req: Request, res: Response) => {
  const { body } = req;
  const { status, data } = await loginService.login(body);

  return res.status(status).json(data);
};

const loginController = { login };
export default loginController;