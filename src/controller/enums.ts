import express, {NextFunction, Request, Response} from 'express';
import countries from '../../list.json';
import {BaseController} from '../base/controller';

export class EnumsController extends BaseController {
  public attach() {
    return this.routes.get('/countries', this.getCountries.bind(this));
  }
  public getCountries(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json(countries);
  }
}
