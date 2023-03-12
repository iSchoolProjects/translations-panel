import {Entity, Column, OneToOne, JoinColumn} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {Language} from './language';

@Entity()
export class LanguageVersion extends BaseEntity {
  @Column({type: 'bigint'})
  version: number;

  @Column()
  languageId: number;

  @OneToOne(() => Language)
  @JoinColumn()
  language: Language;
}
