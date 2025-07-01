import AuthRoute from './AuthRoute'
import RiderRoute from './RiderRoute'
import { Express } from 'express';

export const registerRoutes = (app: Express) => {
  app.use('/auth', AuthRoute);
  app.use('/rider', RiderRoute)
};
