import express, {NextFunction, Request, Response} from 'express';
import {LanguageService} from '../service/language';
import {LanguageVersionService} from '../service/language-version';

export class LanguageController {
  private readonly routes = express.Router();
  private readonly service = new LanguageService();

  public attach(app: Express.Application) {
    return this.routes.get('/:language', this.get.bind(this)).post('/', this.create.bind(this));
  }

  private async get(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const result = await this.service.get(req.params.language);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
  private async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.create(req.body);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
