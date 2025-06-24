import { Router } from 'express';
import { AuthController } from '../Controllers';
import { requestValidationMiddleware } from '../middlewares';
import { loginValidator, signupValidator } from '../validators/auth';

const router = Router();

router.post('/signup', signupValidator, requestValidationMiddleware, AuthController.);
router.post('/login', loginValidator, requestValidationMiddleware, AuthController.login);

export default router;
