import {AppDataSource} from '../data-source';
import {Language} from '../entity/Language';

export class LanguageRepository {
  private readonly query = AppDataSource.getRepository(Language);

  public async getOne(name: string): Promise<Language> {
    return this.query.findOne({where: {name}, relations: ['name_space']});
  }

  public async create(Language: Language): Promise<Language> {
    return this.query.save(Language);
  }

  public async update(Language: Language): Promise<Language> {
    return this.query.save(Language);
  }
}
