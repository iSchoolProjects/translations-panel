import {Entity, Column, ManyToOne, Index, OneToMany, PrimaryColumn} from 'typeorm';
import {ForeignKeyMetadata} from 'typeorm/metadata/ForeignKeyMetadata';
import {BaseEntity} from '../base/entity';
import {Language} from './language';
import {Translations} from './translations';

@Entity()
@Index(['name', 'language'], {unique: true})
export class NameSpace extends BaseEntity {
  @Column()
  name: string;

  @PrimaryColumn()
  code: string;

  @Column({default: false})
  isCompleted: boolean;

  @ManyToOne(() => Language, (language) => language.namespace)
  language: Language;

  @OneToMany(() => Translations, (translations) => translations.namespaces)
  translations: Translations[];
}
