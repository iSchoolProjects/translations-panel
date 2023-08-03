import {DeleteResult, UpdateResult} from 'typeorm';
import {AppDataSource} from '../data-source';
import {Namespace} from '../entity/namespace';
import {IUpdateNameSpace} from '../service/namspace';
import {injectable} from 'inversify';

@injectable()
export class NamespaceRepository {
  private readonly query = AppDataSource.getRepository(Namespace);

  public async getOne(language: string, name: string): Promise<Namespace> {
    return this.query
      .createQueryBuilder('nam')
      .innerJoin('language', 'lng', 'lng.id=nam.languageId')
      .leftJoinAndSelect('translations', 't', 't.namespaceId=nam.id')
      .where('nam.name=:name', {name})
      .andWhere('lng.code=:language', {language})
      .getOneOrFail();
  }

  public async create(NameSpace: Namespace): Promise<Namespace> {
    return this.query.save(NameSpace);
  }

  public async update(NameSpace: IUpdateNameSpace): Promise<UpdateResult> {
    return this.query.update({name: NameSpace.name}, {name: NameSpace.newName});
  }
  public async delete(id: number): Promise<DeleteResult> {
    return this.query.delete({});
  }
}
