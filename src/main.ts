require('reflect-metadata');
import express from 'express';
import {FSUtils} from './utilities/file_system';
const app = express();

app.listen(3000, () => {
  const a = new FSUtils();
  a.createDirectory('common');
  console.log('Running');
});
