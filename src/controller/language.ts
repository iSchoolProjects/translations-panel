import {NextFunction, Request, Response} from 'express';
import {Language} from '../entity/language';
import {LanguageService} from '../service/language';
import {ErrorHandling} from '../utilities/errors/error-handling';
import {BaseController} from '../base/controller';

export class LanguageController extends BaseController {
  private readonly service = new LanguageService();
  private readonly errorHandler = new ErrorHandling(Language);

  public attach() {
    return this.routes
      .get('/', this.getAll.bind(this))
      .get('/:language', this.get.bind(this))
      .post('/', this.create.bind(this));
  }

  private async getAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const result = await this.service.getMany();
      return res.status(200).json(result);
    } catch (error) {
      error.name = 'Common';
      const {message, code} = this.errorHandler.getErrorType(error, req.params.language);
      res.status(code).json({message});
    }
  }
  private async get(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const result = await this.service.get(req.params.language);
      return res.status(200).json(result);
    } catch (error) {
      const {message, code} = this.errorHandler.getErrorType(error, req.params.language);
      res.status(code).json({message});
    }
  }
  private async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.create({...req.body, country: req.params.language});
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
      const {message, code} = this.errorHandler.getErrorType(error, req.body);
      res.status(code).json({message});
    }
  }
}
