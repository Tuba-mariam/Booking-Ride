import { Router } from 'express';
import { DriverController } from '../Controllers';
import { authenticateJwt, requestValidationMiddleware } from '../middlewares';
import registerDriverValidator from '../validators/Driver/RegisterDriver';

const router = Router();

router.post(
  '/register',
  registerDriverValidator,
  requestValidationMiddleware,
  authenticateJwt,
  DriverController.registerDriver
);

export default router;
