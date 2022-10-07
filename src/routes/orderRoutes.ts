import { Router } from 'express';
import OrderController from '../controller/orderController';
import OrderService from '../services/orderServices';

const router = Router();
const orderService = new OrderService();
const orderController = new OrderController(orderService);

router.get('/', orderController.getAll);

export default router;