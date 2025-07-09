import AuthRoute from './AuthRoute';
import RiderRoute from './RiderRoute/RiderRoute';
import DriverRoute from './DriverRoute';
import { Express } from 'express';

export const registerRoutes = (app: Express) => {
  app.use('/auth', AuthRoute);
  app.use('/driver', DriverRoute);
  app.use('/rides', RiderRoute);
};
