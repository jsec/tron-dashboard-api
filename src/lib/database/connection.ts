import 'reflect-metadata';
import {createConnection, Connection, ConnectionOptions} from 'typeorm';
import {join} from 'path';

const parentDir = join(__dirname, '..');

const options: ConnectionOptions = {
  type: 'sqlite',
  database: `${parentDir}/data/audio.sqlite`,
  entities: [`${parentDir}/entities/**/*.ts`],
  logging: true,
  synchronize: true,
};

const connection: Promise<Connection> = createConnection(options);

export default connection;
