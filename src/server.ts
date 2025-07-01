import express from 'express';
import config from './config/config';
import bodyParser from 'body-parser';
import { connectDb } from './config/connectDb';
import { registerRoutes } from './routes';
import { Server } from "socket.io";


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database connection
connectDb();

// Register routes
registerRoutes(app);

// io.on("connection", (socket) => {
//   // GetAllProducts is a message name and products is a data.

//   Cron.schedule('*/2 * * * *', () => {
//     //  io.emit("GetAllProducts", products);
//   console.log('running a task every two minute');
// });

// Setup server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
