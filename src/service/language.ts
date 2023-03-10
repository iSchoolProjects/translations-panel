import {UpdateResult} from 'typeorm';
import {Language} from '../entity/language';
import {LanguageRepository} from '../repository/language';

interface ILanguageCreate {
  name: string;
}
interface ILanguageUpdate extends ILanguageCreate {
  isDisabled: boolean;
}

export class LanguageService {
  private readonly repository = new LanguageRepository();

  public async getMany(): Promise<Language[]> {
    return this.repository.getMany();
  }

  public async get(language: string): Promise<Language> {
    return this.repository.getOne(language);
  }

  public async create(newLaguage: ILanguageCreate): Promise<Language> {
    const language = new Language();
    language.name = newLaguage.name;
    return this.repository.create(language);
  }

  public async update(update: ILanguageUpdate): Promise<UpdateResult> {
    const language = await this.repository.getOne(update.name);
    Object.assign(language, update);
    return this.repository.update(language);
  }
}
