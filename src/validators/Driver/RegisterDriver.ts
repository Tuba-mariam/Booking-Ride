import { body } from 'express-validator';
import vehicleInfoValidator from './VehicleInfo';

const registerDriverValidator = [
  body('drivingLicenceNo')
    .notEmpty()
    .withMessage('Driving Licence Number is required')
    .isLength({ max: 20 })
    .withMessage('Maximum 20 characters allowed'),

  body('vehicleInfo.name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),

  body('vehicleInfo.model').trim().notEmpty().withMessage('model is required'),

  body('vehicleInfo.number')
    .trim()
    .notEmpty()
    .withMessage('Number is required')
    .isLength({ max: 5 })
    .withMessage('Maximum 5 characters '),

  body('vehicleInfo.color').trim().notEmpty().withMessage(' color is required'),
];

export default registerDriverValidator;
