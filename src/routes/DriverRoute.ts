import { Router } from 'express';
import { DriverController } from '../Controllers';
import { authenticateJwt, authorizeRole, requestValidationMiddleware } from '../middlewares';
import registerDriverValidator from '../validators/Driver/RegisterDriver';

const router = Router();


router.post('/', registerDriverValidator, authenticateJwt, requestValidationMiddleware, DriverController.registerDriver);

export default router;
