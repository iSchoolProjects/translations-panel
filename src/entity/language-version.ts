import {Entity, Column, OneToOne, JoinColumn, PrimaryColumn, Index} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {Language} from './language';

@Entity()
@Index(['code'])
export class LanguageVersion extends BaseEntity {
  @Column({type: 'bigint'})
  version: number;

  @PrimaryColumn()
  code: string;

  @OneToOne(() => Language)
  @JoinColumn()
  language: Language;
}
