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

  public async getOne(id: number): Promise<NameSpace> {
    return this.repository.getOne(id);
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
