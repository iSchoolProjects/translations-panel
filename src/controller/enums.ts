import express, {NextFunction, Request, Response} from 'express';
import countries from '../../list.json';

export class EnumsController {
  private readonly routes = express.Router();

  public attach(app: Express.Application) {
    return this.routes.get('/countries', this.getCountries.bind(this));
  }
  public getCountries(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json(countries);
  }
}
