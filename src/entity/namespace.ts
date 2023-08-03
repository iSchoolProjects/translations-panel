import {Entity, Column, ManyToOne, Index, OneToMany, PrimaryColumn} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {Language} from './language';
import {Translation} from './translations';
import {injectable} from 'inversify';
@injectable()
@Entity('name_space')
@Index(['name', 'language'], {unique: true})
export class Namespace extends BaseEntity {
  @Column()
  name: string;

  @PrimaryColumn()
  code: string;

  @Column({default: false})
  isCompleted: boolean;

  @ManyToOne(() => Language, (language) => language.namespace)
  language: Language;

  @OneToMany(() => Translation, (translations) => translations.namespaces)
  translations: Translation[];
}
