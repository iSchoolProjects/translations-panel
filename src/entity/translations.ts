import {Entity, Column, ManyToOne, Index, PrimaryColumn} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {Language} from './language';
import {Namespace} from './namespace';
import {injectable} from 'inversify';

@injectable()
@Entity()
@Index(['key', 'language', 'namespace'], {unique: true})
export class Translation extends BaseEntity {
  @PrimaryColumn()
  key: string;

  @Index({fulltext: true})
  @Column('text')
  value: string;

  @Column()
  namespace: string;

  @Column()
  code: string;

  @Column({default: true})
  approved: boolean;

  @ManyToOne(() => Namespace, (namespace) => namespace.translations)
  namespaces: Namespace;

  @ManyToOne(() => Language, (language) => language.translations)
  language: Language;
}
