import {UpdateResult} from 'typeorm';
import {AppDataSource} from '../data-source';
import {Language} from '../entity/language';
import {injectable} from 'inversify';

@injectable()
export class LanguageRepository {
  private readonly query = AppDataSource.getRepository(Language);

  public async getMany(): Promise<Language[]> {
    return this.query.find({
      where: {isDisabled: false},
      relations: {
        namespace: true,
      },
    });
  }

  public async getOne(code: string): Promise<Language> {
    return this.query.findOneOrFail({where: {code}, relations: ['namespace']});
  }

  public async create(Language: Language): Promise<Language> {
    return this.query.save(Language);
  }

  public async update(Language: Language): Promise<UpdateResult> {
    const getLanguage = await this.getOne(Language.code);
    Object.assign(getLanguage, Language);
    return this.query.update({code: getLanguage.code}, getLanguage);
  }
}
