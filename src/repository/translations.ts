import {AppDataSource} from '../data-source';
import {Translations} from '../entity/translations';

export class TranslationRepository {
  private readonly query = AppDataSource.getRepository(Translations);

  public async getOne(key: string, namespace: string, code: string): Promise<Translations> {
    return this.query.findOne({where: {key, code, namespace}});
  }

  public async create(Translations: Translations): Promise<Translations> {
    return this.query.save(Translations);
  }

  public async update(Translations: Translations): Promise<Translations> {
    return this.query.save(Translations);
  }

  public async findByValue(value: string): Promise<Translations[]> {
    return this.query
      .createQueryBuilder('translations')
      .select()
      .where(`MATCH(value) AGAINST ('${value}' IN BOOLEAN MODE)`)
      .getMany();
  }
}
