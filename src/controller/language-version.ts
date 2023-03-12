import express, {NextFunction, Request, Response} from 'express';
import {LanguageVersionService} from '../service/language-version';

export class LanguageVersionController {
  private readonly routes = express.Router();
  private readonly service = new LanguageVersionService();

  public attach(app: Express.Application) {
    return this.routes.get('/:language', this.get.bind(this));
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
}
