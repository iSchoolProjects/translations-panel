import {AppDataSource} from '../data-source';
import {NameSpace} from '../entity/namespace';

export class NamespaceRepository {
  private readonly query = AppDataSource.getRepository(NameSpace);

  public async getOne(name: string, languageId: number): Promise<NameSpace> {
    return this.query.findOne({where: {name, languageId}, relations: ['translations']});
  }

  public async create(NameSpace: NameSpace): Promise<NameSpace> {
    return this.query.save(NameSpace);
  }

  public async update(NameSpace: NameSpace): Promise<NameSpace> {
    return this.query.save(NameSpace);
  }
}
