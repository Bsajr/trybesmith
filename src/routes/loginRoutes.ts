import { Router } from 'express';
import LoginController from '../controller/loginController';
import validateLogin from '../middlewares/validateLogin';

const router = Router();
const loginController = new LoginController();

router.post('/', validateLogin, loginController.login);

export default router;