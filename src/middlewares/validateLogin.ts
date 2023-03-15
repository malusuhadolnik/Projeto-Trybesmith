import { NextFunction, Request, Response } from 'express';
import { UserCredentials } from '../interfaces';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as UserCredentials;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

export default validateLogin;