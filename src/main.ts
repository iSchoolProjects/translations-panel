require('reflect-metadata');
import express, {Router} from 'express';
import cors from 'cors';
import {FSUtils} from './utilities/file_system';
const app = express();

const routes = express.Router();

routes.get('/hello', (req, res) => {
  console.log(req.headers);
  res.json({hi: 'hello'});
});
const corsOptions = {
  origin: function (origin: string, callback: any) {
    callback(null, true);
  },
};
app.use(cors(corsOptions));
app.use(routes);
app.listen(3001, () => {
  const a = new FSUtils();
  a.createDirectory('common');
  console.log('Running');
});
