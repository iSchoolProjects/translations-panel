import express, {NextFunction, Request, Response} from 'express';
import {Language} from '../entity/language';
import {LanguageService} from '../service/language';
import {InalidValueError, PayloadError} from '../utilities/errors/custom-error';
import {ErrorHandling} from '../utilities/errors/error-handling';
import countries from '../../list.json';

export class LanguageController {
  private readonly routes = express.Router();
  private readonly service = new LanguageService();
  private readonly errorHandler = new ErrorHandling(Language);

  static createPayloadValidation(values: any) {
    const required = ['name'];
    for (const key of required) {
      if (!values[key]) throw new PayloadError(key);
    }
    const findCountry = countries.find((country) => country.code === values.name);
    if (!findCountry) throw new InalidValueError(values.name, 'name');
  }

  static getLanguageValidation(values: any) {
    const findCountry = countries.find((country) => country.code === values);
    if (!findCountry) throw new InalidValueError(values, 'name');
  }

  public attach(app?: Express.Application) {
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
      LanguageController.getLanguageValidation(req.params.language);
      const result = await this.service.get(req.params.language);
      return res.status(200).json(result);
    } catch (error) {
      const {message, code} = this.errorHandler.getErrorType(error, req.params.language);
      res.status(code).json({message});
    }
  }
  private async create(req: Request, res: Response, next: NextFunction) {
    try {
      LanguageController.createPayloadValidation(req.body);
      const result = await this.service.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
      const {message, code} = this.errorHandler.getErrorType(error, req.body);
      res.status(code).json({message});
    }
  }
}
