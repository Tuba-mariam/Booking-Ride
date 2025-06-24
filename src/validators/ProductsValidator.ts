import { body } from 'express-validator';

const productsValidator = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),

  body('price').isFloat().withMessage('price must be greater than 0'),
];

export default productsValidator;
