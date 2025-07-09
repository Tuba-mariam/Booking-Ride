import { Router } from 'express';
import RiderController from '../../Controllers/RiderController';
import { authenticateJwt, requestValidationMiddleware } from '../../middlewares';
import { validateRideStatusUpdate } from '../../validators/Rider';

const router = Router();
router.post(
  '/status',
  validateRideStatusUpdate,
  requestValidationMiddleware,
  authenticateJwt,
  RiderController.updateRideStatus
);

export default router;
