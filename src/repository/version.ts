import {AppDataSource} from '../data-source';
import {LanguageVersion} from '../entity/language-version';

export class LanguageVersionRepository {
  private readonly query = AppDataSource.getRepository(LanguageVersion);

  public async getOne(code: string): Promise<LanguageVersion> {
    return this.query
      .createQueryBuilder('languageVersion')
      .innerJoin('languageVersion.language', 'lang')
      .where('lang.code=:code', {code})
      .getOneOrFail();
  }

  public async create(languageVersion: LanguageVersion): Promise<LanguageVersion> {
    return this.query.save(languageVersion);
  }

  public async update(languageVersion: LanguageVersion): Promise<LanguageVersion> {
    return this.query.save(languageVersion);
  }
}
