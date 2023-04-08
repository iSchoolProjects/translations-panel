import {ICountries} from '../../store/slices/enum.slice';
import BaseApi from '../base.api';

export class EnumApi extends BaseApi {
  public async getEnums(): Promise<{data: ICountries[]}> {
    return await this.get('/enums/countries');
  }
}
