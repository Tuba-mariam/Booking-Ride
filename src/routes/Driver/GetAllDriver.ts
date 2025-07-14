import { Router } from 'express';
import { DriverController } from '../../Controllers';
import { authenticateJwt, requestValidationMiddleware } from '../../middlewares';


const router = Router();

router.get(
  '/',
  requestValidationMiddleware,
  authenticateJwt,
  DriverController.getDrivers
);

export default router;
