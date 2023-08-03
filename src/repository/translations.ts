import {injectable} from 'inversify';
import {AppDataSource} from '../data-source';
import {Translation} from '../entity/translations';

@injectable()
export class TranslationRepository {
  private readonly query = AppDataSource.getRepository(Translation);

  public async getOne(key: string, namespace: string, code: string): Promise<Translation> {
    return this.query.findOne({where: {key, code, namespace}});
  }

  public async create(Translations: Translation): Promise<Translation> {
    return this.query.save(Translations);
  }

  public async update(Translations: Translation): Promise<Translation> {
    return this.query.save(Translations);
  }

  public async findByValue(value: string): Promise<Translation[]> {
    return this.query
      .createQueryBuilder('translations')
      .select()
      .where(`MATCH(value) AGAINST ('${value}' IN BOOLEAN MODE)`)
      .getMany();
  }
}
