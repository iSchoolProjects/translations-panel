import {UpdateResult} from 'typeorm';
import {Language} from '../entity/language';
import {LanguageRepository} from '../repository/language';
import {injectable} from 'inversify';

interface ILanguageCreate {
  code: string;
  country: string;
}
interface ILanguageUpdate extends ILanguageCreate {
  isDisabled: boolean;
}

@injectable()
export class LanguageService {
  constructor(private readonly repository: LanguageRepository) {}

  public async getMany(): Promise<Language[]> {
    return this.repository.getMany();
  }

  public async get(language: string): Promise<Language> {
    return this.repository.getOne(language);
  }

  public async create(newLaguage: ILanguageCreate): Promise<Language> {
    const language = new Language();
    language.code = newLaguage.code;
    language.country = newLaguage.country;
    return this.repository.create(language);
  }

  public async update(update: ILanguageUpdate): Promise<UpdateResult> {
    const language = await this.repository.getOne(update.code);
    Object.assign(language, update);
    return this.repository.update(language);
  }
}
