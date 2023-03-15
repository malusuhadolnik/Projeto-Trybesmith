import express from 'express';
import productsRouter from './routes/products.routes';
import usersRouter from './routes/users.routes';
import orderRouter from './routes/orders.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);

export default app;
