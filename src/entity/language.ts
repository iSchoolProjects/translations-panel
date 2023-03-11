import {Entity, Column, OneToOne, OneToMany, Index, JoinColumn} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {LanguageVersion} from './language-version';
import {NameSpace} from './namespace';
import {Translations} from './translations';

@Entity()
@Index(['name'], {unique: true})
export class Language extends BaseEntity {
  @Column()
  name: string;

  @Column({default: false})
  isDisabled: boolean;

  @OneToOne(() => LanguageVersion)
  languageVersion: LanguageVersion;

  @OneToMany(() => NameSpace, (namespace) => namespace.language)
  namespace: NameSpace[];

  @OneToMany(() => Translations, (translations) => translations.language)
  translations: Translations[];
}
