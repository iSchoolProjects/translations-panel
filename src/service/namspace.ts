import {DeleteResult, UpdateResult} from 'typeorm';
import {NameSpace} from '../entity/namespace';
import {NamespaceRepository} from '../repository/namespace';
import {LanguageService} from './language';

interface INamespace {
  name: string;
  language: string;
}

export interface IUpdateNameSpace {
  id: number;
  name: string;
}

export default class NamespaceService {
  private readonly repository = new NamespaceRepository();
  private readonly languageService = new LanguageService();

  public async getOne(language: string, name: string): Promise<NameSpace> {
    return this.repository.getOne(language, name);
  }

  public async create(namespace: INamespace): Promise<NameSpace> {
    const language = await this.languageService.get(namespace.language);
    const newNamespace = new NameSpace();
    Object.assign(newNamespace, {...namespace, languageId: language.id});
    return this.repository.create(newNamespace);
  }

  public async update(namespace: IUpdateNameSpace): Promise<NameSpace> {
    await this.repository.update(namespace);
    return this.repository.findOne(namespace.id);
  }
  public async delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}

// -> Table scan on t  (cost=0.35 rows=1) (actual time=0.009..0.009 rows=0 loops=1)

// -> Filter: (t.languageId = '2')  (cost=0.35 rows=1) (actual time=0.005..0.005 rows=0 loops=1)
//     -> Index lookup on t using FK_3b868b38fa22dedfb286538fffa (namespaceId='4')  (cost=0.35 rows=1) (actual time=0.004..0.004 rows=0 loops=1)

//     -> Index lookup on t using FK_3b868b38fa22dedfb286538fffa (namespaceId='4')  (cost=0.35 rows=1) (actual time=0.006..0.006 rows=0 loops=1)
