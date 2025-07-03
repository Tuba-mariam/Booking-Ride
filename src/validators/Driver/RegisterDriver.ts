
import { body } from 'express-validator';
import vehicleInfoValidator from './VehicleInfo';

const registerDriverValidator = [
  body('drivingLicenceNo')
    .notEmpty()
    .withMessage('Driving Licence Number is required')
    .isLength({ max: 20 })
    .withMessage('Maximum 20 characters allowed'),


       ...vehicleInfoValidator 
];

export default registerDriverValidator;

