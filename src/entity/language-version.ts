import {Entity, Column, OneToOne, JoinColumn, PrimaryColumn, Index} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {Language} from './language';
import {injectable} from 'inversify';

@injectable()
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
