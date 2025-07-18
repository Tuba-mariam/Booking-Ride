import dotenv from 'dotenv';
import { IConfig } from '../interfaces';

dotenv.config();

const config: IConfig = {
  port: Number(process.env.PORT) || 4000,
  mongoDbUrl: process.env.MONGO_DB_URL || '',
  jwtSecret: process.env.JWT_SECRET || '',
  googleApiKey: process.env.GOOGLE_API_KEY || '',
};

export default config;
