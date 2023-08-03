import {NextFunction, Request, Response} from 'express';
import {ErrorHandling} from '../utilities/errors/error-handling';
import NamespaceService from '../service/namspace';
import {Namespace} from '../entity/namespace';
import {BaseController} from '../base/controller';
import {injectable} from 'inversify';

@injectable()
export class NamespaceController extends BaseController {
  private readonly errorHandler = new ErrorHandling(Namespace);

  constructor(private readonly service: NamespaceService) {
    super();
  }

  public attach() {
    return this.routes
      .get('/:language/:name', this.get.bind(this))
      .post('/:language', this.create.bind(this))
      .put('/:language/:name', this.update.bind(this))
      .delete('/:language/:name', this.delete.bind(this));
  }

  private async get(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const result = await this.service.getOne(req.params.language, req.params.name);
      return res.status(200).json(result);
    } catch (error) {
      const {message, code} = this.errorHandler.getErrorType(error, {...req.params});
      res.status(code).json({message});
    }
  }
  private async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.create({...req.body, language: req.params.language});
      return res.status(201).json(result);
    } catch (error) {
      const {message, code} = this.errorHandler.getErrorType(error, req.body);
      res.status(code).json({message});
    }
  }
  private async update(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.update({...req.body, id: +req.params.id}, req.params.language);
      return res.status(200).json(result);
    } catch (error) {
      const {message, code} = this.errorHandler.getErrorType(error, {...req.body, ...req.params});
      res.status(code).json({message});
    }
  }
  private async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.delete(+req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      const {message, code} = this.errorHandler.getErrorType(error, null);
      res.status(code).json({message});
    }
  }
}
