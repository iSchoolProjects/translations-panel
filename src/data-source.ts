import dontenv from 'dotenv';
dontenv.config();
import 'reflect-metadata';
import {DataSource} from 'typeorm';
import {MysqlConnectionOptions} from 'typeorm/driver/mysql/MysqlConnectionOptions';
import {LanguageVersionSubscriber} from './subscriber/language-version.subscriber';

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as unknown as MysqlConnectionOptions['type'],
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: ['src/entity/**/*{.ts,.js}'],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  subscribers: [LanguageVersionSubscriber],
});
