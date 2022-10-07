import express from 'express';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

export default app;
