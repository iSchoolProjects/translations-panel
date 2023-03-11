import {Language} from '../entity/language';
import {LanguageRepository} from '../repository/language';

interface ILanguageUpdate {
  name: string;
  isDisabled: boolean;
}

export class LanguageVersionService {
  private readonly repository = new LanguageRepository();

  public async get(language: string): Promise<Language> {
    return this.repository.getOne(language);
  }

  public async create(name: string): Promise<Language> {
    const language = new Language();
    language.name = name;
    return this.repository.create(language);
  }

  public async update(update: ILanguageUpdate): Promise<Language> {
    const language = await this.repository.getOne(update.name);
    Object.assign(language, update);
    return this.repository.update(language);
  }
}
