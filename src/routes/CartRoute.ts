import { Router } from 'express';
import cartValidator from '../validators/CartValidator';
import { authenticateJwt, authorizeRole, requestValidationMiddleware } from '../middlewares';
import { UserroleEnum } from '../enums';
import { CartController } from '../Controllers';

const router = Router();

router.post(
  '/',
  authenticateJwt,
  cartValidator,
  requestValidationMiddleware,
  CartController.addToCart
);
router.get('/', authenticateJwt, authorizeRole(UserroleEnum.BUYER), CartController.getCartByBuyer);

export default router;
