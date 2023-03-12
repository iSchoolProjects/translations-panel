import {AppDataSource} from '../data-source';
import {Language} from '../entity/language';

export class LanguageRepository {
  private readonly query = AppDataSource.getRepository(Language);

  public async getMany(): Promise<Language[]> {
    return this.query.find({where: {isDisabled: false}, relations: ['namespace']});
  }

  public async getOne(name: string): Promise<Language> {
    return this.query.findOneOrFail({where: {name}, relations: ['namespace']});
  }

  public async create(Language: Language): Promise<Language> {
    return this.query.save(Language);
  }

  public async update(Language: Language): Promise<Language> {
    return this.query.save(Language);
  }
}
