import {DeleteResult, UpdateResult} from 'typeorm';
import {Namespace} from '../entity/namespace';
import {NamespaceRepository} from '../repository/namespace';
import {LanguageService} from './language';
import {injectable} from 'inversify';

interface INamespace {
  name: string;
  language: string;
}

export interface IUpdateNameSpace {
  langauge: string;
  name: string;
  newName: string;
}

@injectable()
export default class NamespaceService {
  constructor(private readonly repository: NamespaceRepository, private readonly languageService: LanguageService) {}

  public async getOne(language: string, name: string): Promise<Namespace> {
    return this.repository.getOne(language, name);
  }

  public async create(namespace: INamespace): Promise<Namespace> {
    const language = await this.languageService.get(namespace.language);
    const newNamespace = new Namespace();
    Object.assign(newNamespace, {...namespace, language: language});
    return this.repository.create(newNamespace);
  }

  public async update(namespace: IUpdateNameSpace, language: string): Promise<Namespace> {
    await this.repository.update(namespace);
    return this.repository.getOne(language, namespace.name);
  }
  public async delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
