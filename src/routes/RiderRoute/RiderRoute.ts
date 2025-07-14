import { Router } from 'express';
import RiderValidation from '../../validators/Rider/RiderValidation';
import RiderController from '../../Controllers/RiderController';
import { authenticateJwt, requestValidationMiddleware } from '../../middlewares';
import { validateRideStatusUpdate } from '../../validators/Rider';

const router = Router();
router.post('/', RiderValidation, requestValidationMiddleware, authenticateJwt, RiderController.requestRide);
router.post(
  '/status',
  validateRideStatusUpdate,
  requestValidationMiddleware,
  authenticateJwt,
  RiderController.updateRideStatus
);

export default router;

