import {ILanguage} from '../../../app/language/interfaces/ILanguage';
import BaseApi from '../../base.api';

const LANGUAGE_ROUTE = '/language';

export class LanguageApi extends BaseApi {
  public async getAllLanguages(): Promise<{data: ILanguage[]}> {
    return await this.get(LANGUAGE_ROUTE, undefined);
  }
}
