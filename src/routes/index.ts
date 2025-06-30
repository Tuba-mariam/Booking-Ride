import authRoutes from './AuthRoute';

export const registerRoutes = (app: Express) => {
  app.use('/auth', authRoutes);

};
