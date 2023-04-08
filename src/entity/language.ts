import {Entity, Column, OneToOne, OneToMany, Index, JoinColumn} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {LanguageVersion} from './language-version';
import {NameSpace} from './namespace';
import {Translations} from './translations';

@Entity()
@Index(['code'], {unique: true})
export class Language extends BaseEntity {
  @Column()
  code: string;

  @Column({default: false})
  isDisabled: boolean;

  @Column()
  country: string;

  @OneToOne(() => LanguageVersion)
  languageVersion: LanguageVersion;

  @OneToMany(() => NameSpace, (namespace) => namespace.language)
  namespace: NameSpace[];

  @OneToMany(() => Translations, (translations) => translations.language)
  translations: Translations[];
}
