import { body, param } from 'express-validator';
import mongoose from 'mongoose';

const RiderValidation = [
  param('userId')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid userId'),
  param('driverId')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid driverId'),
  body('pickup').exists().withMessage('pickup is required').isObject().withMessage('pickup must be an object'),
  body('pickup.latitude')
    .exists()
    .withMessage('pickup.latitude is required')
    .isFloat({ min: -90, max: 90 })
    .withMessage('latitude must be between -90 and 90'),
  body('pickup.longitude')
    .exists()
    .withMessage('pickup.longitude is required')
    .isFloat({ min: -180, max: 180 })
    .withMessage('longitude must be between -180 and 180'),
];

export default RiderValidation;
