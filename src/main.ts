// env files parser
import dotenv from 'dotenv';
dotenv.config();

// decorators
import 'reflect-metadata';

// express
import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// typeorm setup
import {AppDataSource} from './data-source';
// routes
import {registerRoutes} from './controller';
// swagger
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';
import {isJSONMiddleware} from './utilities/middleware/json-validation';

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

app.use(isJSONMiddleware);

registerRoutes(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.APP_PORT, () => {
  console.log('Running', process.env.APP_PORT);
});
