import { body } from 'express-validator';

const vehicleInfoValidator = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),

  body('model').trim().notEmpty().withMessage('model is required'),

  body('Number')
    .trim()
    .notEmpty()
    .withMessage(' number is required')
    .isLength({ max: 5 })
    .withMessage('Maximum 5 characters '),

  body('color').trim().notEmpty().withMessage(' color is required'),
];
export default vehicleInfoValidator;
