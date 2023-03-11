import {AppDataSource} from '../data-source';
import {Translations} from '../entity/Translations';

export class NamespaceRepository {
  private readonly query = AppDataSource.getRepository(Translations);

  public async getOne(key: string, namespaceId: number, languageId: number): Promise<Translations> {
    return this.query.findOne({where: {key, languageId, namespaceId}});
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
