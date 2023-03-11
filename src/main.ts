import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import express, {Router} from 'express';
import cors from 'cors';
import {FSUtils} from './utilities/file_system';
import {AppDataSource} from './data-source';
const app = express();

const routes = express.Router();

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

routes.get('/hello', (req, res) => {
  console.log(req.headers);
  res.json({hi: 'hello'});
});
const corsOptions = {
  origin: function (_: string, callback: any) {
    callback(null, true);
  },
};
app.use(cors(corsOptions));
app.use(routes);
app.listen(process.env.APP_PORT, () => {
  console.log('Running', process.env.APP_PORT);
});
