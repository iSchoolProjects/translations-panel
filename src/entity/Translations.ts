import {Entity, Column, ManyToOne, Index} from 'typeorm';
import {BaseEntity} from '../base/entity';
import {Language} from './Language';
import {NameSpace} from './Namespace';

@Entity()
@Index(['key', 'language', 'namespace'], {unique: true})
export class Translations extends BaseEntity {
  @Column()
  key: string;

  @Index({fulltext: true})
  @Column('text')
  value: string;

  @Column()
  namespaceId: number;

  @Column()
  languageId: number;

  @Column({default: true})
  approved: boolean;

  @ManyToOne(() => NameSpace, (namespace) => namespace.translations)
  namespace: NameSpace;

  @ManyToOne(() => Language, (language) => language.translations)
  language: Language;
}
