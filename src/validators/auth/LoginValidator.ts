import { body } from 'express-validator';

const loginValidator = [
  body('email')
    .isEmail()
    .withMessage('Valid email is required')
    .isLength({ max: 320 })
    .withMessage('Email cannot exceed 320 characters')
    .normalizeEmail(),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isString()
    .withMessage('Password should be a string')
    .isLength({ min: 8 })
    .withMessage('Password should be at least 8 characters long')
    .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/)
    .withMessage('Password must contain at least one uppercase letter and one special character'),
];

export default loginValidator;
