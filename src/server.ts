import express from 'express';
import config from './config/config';
import bodyParser from 'body-parser';
import { connectDb } from './config/connectDb';
import { registerRoutes } from './routes';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database connection
connectDb();

// Register routes
registerRoutes(app);

// Setup server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
