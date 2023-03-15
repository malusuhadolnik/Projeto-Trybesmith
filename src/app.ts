import express from 'express';
import productsRouter from './routes/products.routes';
import usersRouter from './routes/users.routes';
import orderRouter from './routes/orders.routes';
import loginRouter from './routes/login.routes';
import { validateLogin } from './middlewares/validateLogin'

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);
app.use('/login', validateLogin, loginRouter);

export default app;
