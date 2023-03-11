import {Entity, Column, OneToOne, OneToMany, Index, JoinColumn} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {LanguageVersion} from './LanguageVersion';
import {NameSpace} from './Namespace';
import {Translations} from './Translations';

@Entity()
@Index(['name'], {unique: true})
export class Language extends BaseEntity {
  @Column()
  name: string;

  @Column()
  isDisabled: boolean;

  @OneToOne(() => LanguageVersion)
  languageVersion: LanguageVersion;

  @OneToMany(() => NameSpace, (namespace) => namespace.language)
  namespace: NameSpace[];

  @OneToMany(() => Translations, (translations) => translations.language)
  translations: Translations[];
}
