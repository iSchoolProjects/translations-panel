import {injectable} from 'inversify';
import {Translation} from '../entity/translations';
import {TranslationRepository} from '../repository/translations';

interface ITranslation {
  key: string;
  value: string;
  languageId: number;
  namespaceId: number;
}

@injectable()
export default class TranslationsService {
  constructor(private readonly repository: TranslationRepository) {}

  public async getOne(key: string, namespace: string, code: string): Promise<Translation> {
    return this.repository.getOne(key, namespace, code);
  }

  public async create(translation: ITranslation): Promise<Translation> {
    const translations = new Translation();
    Object.assign(translations, translation);
    return this.repository.create(translations);
  }

  public async update(translations: ITranslation): Promise<Translation> {
    const newTranslation = new Translation();
    Object.assign(newTranslation, translations);
    return this.repository.create(newTranslation);
  }

  public async findByValue(value: string): Promise<Translation[]> {
    return this.repository.findByValue(value);
  }
}
