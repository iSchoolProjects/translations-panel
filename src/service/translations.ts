import {Translations} from '../entity/translations';
import {TranslationRepository} from '../repository/translations';

interface ITranslation {
  key: string;
  value: string;
  languageId: number;
  namespaceId: number;
}

export default class TrabslationsService {
  private readonly repository = new TranslationRepository();

  public async getOne(key: string, namespaceId: number, languageId: number): Promise<Translations> {
    return this.repository.getOne(key, namespaceId, languageId);
  }

  public async create(translation: ITranslation): Promise<Translations> {
    const translations = new Translations();
    Object.assign(translations, translation);
    return this.repository.create(translations);
  }

  public async update(translations: ITranslation): Promise<Translations> {
    const newTranslation = new Translations();
    Object.assign(newTranslation, translations);
    return this.repository.create(newTranslation);
  }

  public async findByValue(value: string): Promise<Translations[]> {
    return this.repository.findByValue(value);
  }
}
