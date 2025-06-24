import { body } from 'express-validator';

const orderValidator = [
  body('items').isArray({ min: 1 }).withMessage('Items must be a non-empty array'),

  body('items.*.productId')
    .notEmpty()
    .withMessage('Product ID is required for each item')
    .isMongoId()
    .withMessage('Invalid product ID'),

  body('items.*.quantity')
    .notEmpty()
    .withMessage('Quantity is required for each item')
    .isInt({ min: 1 })
    .withMessage('Quantity must be at least 1'),

  body('totalAmount')
    .notEmpty()
    .withMessage('Total amount is required')
    .isFloat({ gt: 0 })
    .withMessage('Total amount must be greater than 0'),
];

export default orderValidator;
