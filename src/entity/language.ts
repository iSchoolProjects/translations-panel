import {Entity, Column, OneToOne, OneToMany, Index, PrimaryColumn, JoinColumn} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {LanguageVersion} from './language-version';
import {Namespace} from './namespace';
import {Translation} from './translations';
import {injectable} from 'inversify';

@injectable()
@Entity()
@Index(['code'], {unique: true})
export class Language extends BaseEntity {
  @PrimaryColumn()
  code: string;

  @Column({default: false})
  isDisabled: boolean;

  @Column()
  country: string;

  @OneToOne(() => LanguageVersion)
  languageVersion: LanguageVersion;

  @OneToMany((type) => Namespace, (namespace) => namespace.language)
  namespace: Namespace[];

  @OneToMany(() => Translation, (translations) => translations.language)
  translations: Translation[];
}
