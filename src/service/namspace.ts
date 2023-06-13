import {DeleteResult, UpdateResult} from 'typeorm';
import {NameSpace} from '../entity/namespace';
import {NamespaceRepository} from '../repository/namespace';
import {LanguageService} from './language';

interface INamespace {
  name: string;
  language: string;
}

export interface IUpdateNameSpace {
  langauge: string;
  name: string;
  newName: string;
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
    Object.assign(newNamespace, {...namespace, language: language});
    return this.repository.create(newNamespace);
  }

  public async update(namespace: IUpdateNameSpace, language: string): Promise<NameSpace> {
    await this.repository.update(namespace);
    return this.repository.getOne(language, namespace.name);
  }
  public async delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
