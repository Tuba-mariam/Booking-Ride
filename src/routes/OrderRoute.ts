import { Router } from 'express';
import { OrderController } from '../Controllers';
import orderValidator from '../validators/OrderValidator';
import { requestValidationMiddleware, authenticateJwt } from '../middlewares';

const router = Router();

router.post(
  '/',
  authenticateJwt,
  orderValidator,
  requestValidationMiddleware,
  OrderController.createOrder
);
router.get('/', authenticateJwt, OrderController.getOrderBySeller);

export default router;
