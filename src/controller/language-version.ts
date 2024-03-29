import {NextFunction, Request, Response} from 'express';
import {LanguageVersion} from '../entity/language-version';
import {LanguageVersionService} from '../service/language-version';
import {ErrorHandling} from '../utilities/errors/error-handling';
import {BaseController} from '../base/controller';
import {injectable} from 'inversify';

@injectable()
export class LanguageVersionController extends BaseController {
  private readonly errorHandler = new ErrorHandling(LanguageVersion);

  constructor(private readonly service: LanguageVersionService) {
    super();
  }

  public attach() {
    return this.routes.get('/', this.get.bind(this));
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
}
