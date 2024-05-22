import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRouter } from './app/modules/product/product.route';
import { OrderRouter } from './app/modules/orders/order.route';
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use('/api', ProductRouter);
app.use('/api', OrderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

export default app;
