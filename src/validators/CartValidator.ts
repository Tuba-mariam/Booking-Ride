import { body } from 'express-validator';

const cartValidator = [
  body('productId').isMongoId().withMessage('Invalid productId'),
  body('price').isFloat().withMessage('price must be greater than 0'),
  body('quantity').isInt({ min: 0 }),
];

export default cartValidator;
