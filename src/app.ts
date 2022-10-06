import express from 'express';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

export default app;
