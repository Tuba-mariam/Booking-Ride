import authRoutes from './AuthRoute';
import { Express } from 'express';

export const registerRoutes = (app: Express) => {


  app.use('/auth', authRoutes);

};
