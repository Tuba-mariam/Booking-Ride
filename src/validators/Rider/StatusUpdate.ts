import { body } from 'express-validator';
import mongoose from 'mongoose';
import { RideStatusEnum } from '../../enums';

const validateRideStatusUpdate = [
  body('rideId')
    .exists({ checkFalsy: true })
    .withMessage('rideId is required')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid rideId'),

  body('status')
    .exists({ checkFalsy: true })
    .withMessage('status is required')
    .isIn(Object.values(RideStatusEnum))
    .withMessage(`Invalid status. Must be one of: ${Object.values(RideStatusEnum).join(', ')}`),
];

export default validateRideStatusUpdate;
