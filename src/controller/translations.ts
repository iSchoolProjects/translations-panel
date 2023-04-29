import express, {NextFunction, Request, Response} from 'express';
import {InalidValueError, PayloadError} from '../utilities/errors/custom-error';
import {ErrorHandling} from '../utilities/errors/error-handling';
import {LanguageService} from '../service/language';
import {Language} from '../entity/language';
import {Translations} from '../entity/translations';
export class TranslationsController {
  private readonly routes = express.Router({mergeParams: true});
  private readonly service = new Translations();
  private readonly errorHandler = new ErrorHandling(Translations);

  static createPayloadValidation(values: any) {
    const required = ['name', 'language'];
    for (const key of required) {
      if (!values[key]) throw new PayloadError(key);
    }
    // const findCountry = countries.find((country) => country.code === values.language);
    // if (!findCountry) throw new InalidValueError(values.language, 'language');
  }

  static updatePayloadValidation(values: any) {
    const required = ['name'];
    for (const key of required) {
      if (!values[key]) throw new PayloadError(key);
    }
  }

  static getLanguageValidation(values: any) {
    // const findCountry = countries.find((country) => country.code === values);
    // if (!findCountry) throw new InalidValueError(values, 'name');
  }

  public attach(app?: Express.Application) {
    return this.routes
      .get('/:id/', this.get.bind(this))
      .post('/', this.create.bind(this))
      .put('/:id', this.update.bind(this))
      .delete('/:id', this.delete.bind(this));
  }

  private async get(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      //   const result = await this.service.get(req.params.id);
      return res.status(200).json({});
    } catch (error) {
      const {message, code} = this.errorHandler.getErrorType(error, {...req.params});
      res.status(code).json({message});
    }
  }
  private async create(req: Request, res: Response, next: NextFunction) {
    try {
      //   NamespaceController.createPayloadValidation(req.body);
      //   const result = await this.service.create(req.body);
      return res.status(201).json({});
    } catch (error) {
      const {message, code} = this.errorHandler.getErrorType(error, req.body);
      res.status(code).json({message});
    }
  }
  private async update(req: Request, res: Response, next: NextFunction) {
    try {
      //   NamespaceController.updatePayloadValidation(req.body);
      //   const result = await this.service.update({...req.body, id: +req.params.id});
      return res.status(200).json({});
    } catch (error) {
      const {message, code} = this.errorHandler.getErrorType(error, {...req.body, ...req.params});
      res.status(code).json({message});
    }
  }
  private async delete(req: Request, res: Response, next: NextFunction) {
    try {
      //   const result = await this.service.delete(+req.params.id);
      return res.status(204).json({});
    } catch (error) {
      const {message, code} = this.errorHandler.getErrorType(error, null);
      res.status(code).json({message});
    }
  }
}
