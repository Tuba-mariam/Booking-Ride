import AuthRoute from './AuthRoute';
import RiderRoute from './RiderRoute';
import DriverRoute from './DriverRoute';
import { Express } from 'express';

export const registerRoutes = (app: Express) => {
  app.use('/auth', AuthRoute);
  app.use('/register', DriverRoute);
  app.use('/rider', RiderRoute);
};
