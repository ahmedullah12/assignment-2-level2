import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRouter } from './modules/product/product.route';
const app = express();

//middlewares
app.use(express.json());
app.use(cors())

app.use("/api", ProductRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
