import {DeleteResult, UpdateResult} from 'typeorm';
import {AppDataSource} from '../data-source';
import {NameSpace} from '../entity/namespace';
import {IUpdateNameSpace} from '../service/namspace';

export class NamespaceRepository {
  private readonly query = AppDataSource.getRepository(NameSpace);

  public async getOne(id: number): Promise<NameSpace> {
    return this.query.findOneOrFail({where: {id}, relations: ['translations']});
  }
  public async findOne(id: number): Promise<NameSpace> {
    return this.query.findOneOrFail({where: {id}});
  }

  public async create(NameSpace: NameSpace): Promise<NameSpace> {
    return this.query.save(NameSpace);
  }

  public async update(NameSpace: IUpdateNameSpace): Promise<UpdateResult> {
    return this.query.update({id: NameSpace.id}, {...NameSpace});
  }
  public async delete(id: number): Promise<DeleteResult> {
    return this.query.delete({id});
  }
}
