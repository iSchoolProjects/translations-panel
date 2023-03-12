import {NameSpace} from '../entity/namespace';
import {NamespaceRepository} from '../repository/namespace';

interface INamespace {
  name: string;
  languageId: number;
}

export default class NamespaceService {
  private readonly repository = new NamespaceRepository();

  public async getOne(namespace: string, languageId: number): Promise<NameSpace> {
    return this.repository.getOne(namespace, languageId);
  }

  public async create(namespace: INamespace): Promise<NameSpace> {
    const newNamespace = new NameSpace();
    Object.assign(newNamespace, namespace);
    return this.repository.create(newNamespace);
  }

  public async update(namespace: INamespace): Promise<NameSpace> {
    const newNamespace = new NameSpace();
    Object.assign(newNamespace, namespace);
    return this.repository.create(newNamespace);
  }
}
