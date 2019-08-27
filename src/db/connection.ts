import 'reflect-metadata';
import {createConnection, Connection, ConnectionOptions} from 'typeorm';
import {join} from 'path';

const parentDir: string = join(__dirname, '..');

const options: ConnectionOptions = {
  type: 'sqlite',
  database: `${parentDir}/../data/audio.sqlite`,
  entities: [`${parentDir}/models/**/*.ts`],
  logging: true,
  synchronize: true,
};

const connection: Promise<Connection> = createConnection(options);

export default connection;
