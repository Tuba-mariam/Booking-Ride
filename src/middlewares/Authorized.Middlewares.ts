import { Response, NextFunction } from 'express';
import { UserroleEnum } from '../enums';
import { IAuthRequest } from '../interfaces';

const authorizeRole = (requiredRole: UserroleEnum) => {
  return (req: IAuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || req.user.role !== requiredRole) {
      res.status(403).json({
        message: `Access denied. Only ${requiredRole}s are allowed.`,
      });
      return;
    }

    next();
  };
};
export default authorizeRole;
