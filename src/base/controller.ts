import express, {Router} from 'express';

export abstract class BaseController {
  protected readonly routes = express.Router({mergeParams: true});

  public abstract attach(): Router;
}
