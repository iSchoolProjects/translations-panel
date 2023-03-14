import {UpdateResult} from 'typeorm';
import {AppDataSource} from '../data-source';
import {NameSpace} from '../entity/namespace';

export class NamespaceRepository {
  private readonly query = AppDataSource.getRepository(NameSpace);

  public async getOne(id: number): Promise<NameSpace> {
    return this.query.findOne({where: {id}, relations: ['translations']});
  }

  public async create(NameSpace: NameSpace): Promise<NameSpace> {
    return this.query.save(NameSpace);
  }

  public async update(NameSpace: NameSpace): Promise<UpdateResult> {
    return this.query.update({id: NameSpace.id}, NameSpace);
  }
}
