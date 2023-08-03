import {injectable} from 'inversify';
import {LanguageVersion} from '../entity/language-version';
import {LanguageVersionRepository} from '../repository/version';
import {LanguageService} from './language';

@injectable()
export class LanguageVersionService {
  constructor(private readonly repository: LanguageVersionRepository, private readonly language: LanguageService) {}

  public async get(language: string): Promise<LanguageVersion> {
    return this.repository.getOne(language);
  }

  public async create(languageName: string): Promise<LanguageVersion> {
    const languageVersion = new LanguageVersion();
    const language = await this.language.get(languageName);
    languageVersion.version = new Date().getTime();
    return this.repository.create(languageVersion);
  }

  public async update(name: string): Promise<LanguageVersion> {
    const language = await this.language.get(name);
    const languageVersion = new LanguageVersion();
    languageVersion.language = language;
    languageVersion.version = new Date().getTime();
    return this.repository.update(languageVersion);
  }
}
