import { Router } from 'express';
import { ProductController } from '../Controllers';
import { productsValidator } from '../validators';
import { requestValidationMiddleware, authenticateJwt, authorizeRole } from '../middlewares';
import { UserroleEnum } from '../enums';

const router = Router();

router.post(
  '/',
  productsValidator,
  authenticateJwt,
  requestValidationMiddleware,
  authorizeRole(UserroleEnum.SELLER),
  ProductController.createProduct
);

router.get('/', authenticateJwt, ProductController.getProduct);

export default router;
