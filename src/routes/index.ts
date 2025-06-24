import authRoutes from './AuthRoute';
import productRoutes from './ProductRoute';
import cartRoutes from './CartRoute';
import orderRoutes from './OrderRoute';
import { Express } from 'express';

export const registerRoutes = (app: Express) => {
  app.use('/auth', authRoutes);
  app.use('/cart', cartRoutes);
  app.use('/products', productRoutes);
  app.use('/orders', orderRoutes);
};
