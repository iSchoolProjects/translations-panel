import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import {AppDataSource} from './data-source';
import bodyParser from 'body-parser';
import {registerRoutes} from './controller';
const app = express();

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

const corsOptions = {
  origin: function (_: string, callback: any) {
    callback(null, true);
  },
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

registerRoutes(app);

app.listen(process.env.APP_PORT, () => {
  console.log('Running', process.env.APP_PORT);
});
