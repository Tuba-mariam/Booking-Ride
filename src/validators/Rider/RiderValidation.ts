import { body, param } from 'express-validator';
import mongoose from 'mongoose';

const RiderValidation = [
  body('driverId')
    .exists({ checkFalsy: true })
    .withMessage('driverId is required')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid driverId'),

  // pickup must be an object
  body('pickup')
    .exists({ checkFalsy: true })
    .withMessage('pickup is required')
    .isObject()
    .withMessage('pickup must be an object'),

  body('pickup.latitude')
    .exists()
    .withMessage('pickup.latitude is required')
    .isFloat({ min: -90, max: 90 })
    .withMessage('pickup.latitude must be between -90 and 90'),

  body('pickup.longitude')
    .exists()
    .withMessage('pickup.longitude is required')
    .isFloat({ min: -180, max: 180 })
    .withMessage('pickup.longitude must be between -180 and 180'),

  // dropoff must be an object
  body('dropoff')
    .exists({ checkFalsy: true })
    .withMessage('dropoff is required')
    .isObject()
    .withMessage('dropoff must be an object'),

  body('dropoff.latitude')
    .exists()
    .withMessage('dropoff.latitude is required')
    .isFloat({ min: -90, max: 90 })
    .withMessage('dropoff.latitude must be between -90 and 90'),

  body('dropoff.longitude')
    .exists()
    .withMessage('dropoff.longitude is required')
    .isFloat({ min: -180, max: 180 })
    .withMessage('dropoff.longitude must be between -180 and 180'),
];

export default RiderValidation;
