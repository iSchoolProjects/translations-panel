import {Entity, Column, ManyToOne, Index, PrimaryColumn} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {Language} from './language';
import {NameSpace} from './namespace';

@Entity()
@Index(['key', 'language', 'namespace'], {unique: true})
export class Translations extends BaseEntity {
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

  @ManyToOne(() => NameSpace, (namespace) => namespace.translations)
  namespaces: NameSpace;

  @ManyToOne(() => Language, (language) => language.translations)
  language: Language;
}
