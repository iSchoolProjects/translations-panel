import express, {Router} from 'express';
import {injectable} from 'inversify';

@injectable()
export abstract class BaseController {
  protected readonly routes = express.Router({mergeParams: true});

  public abstract attach(): Router;
}
