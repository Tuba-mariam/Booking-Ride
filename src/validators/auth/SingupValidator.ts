import { body } from 'express-validator';
import { UserroleEnum } from '../../enums';

const signupValidator = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),

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

  body('role')
    .isIn([UserroleEnum.BUYER, UserroleEnum.SELLER])
    .withMessage('Valid role is required'),
];

export default signupValidator;
