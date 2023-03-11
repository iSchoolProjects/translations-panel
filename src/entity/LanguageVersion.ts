import {Entity, Column, OneToOne, JoinColumn} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {Language} from './Language';

@Entity()
export class LanguageVersion extends BaseEntity {
  @Column()
  version: number;

  @OneToOne(() => Language)
  @JoinColumn()
  language: Language;
}
