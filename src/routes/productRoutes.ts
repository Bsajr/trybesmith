import { Router } from 'express';
import ProductController from '../controller/productController';

const router = Router();
const productController = new ProductController();

router.get('/products', (req, res) => productController.findAll(req, res));

export default router;