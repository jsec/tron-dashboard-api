import * as dotenv from 'dotenv';

import { Factory, Seeder } from 'typeorm-seeding';
import { basename, extname, join } from 'path';

import Audio from '../models/audio.model';
import { Connection } from 'typeorm/connection/Connection';
import { readdirSync } from 'fs';

export default class CreateAudios implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    dotenv.config();
    const seedFolder: string = process.env.AUDIO_DIRECTORY;

    const values: Audio[] = readdirSync(seedFolder).map(file => {
      const audio = new Audio();
      audio.filename = join(seedFolder, file);
      audio.name = basename(file, extname(file));

      return audio;
    });

    await connection
      .createQueryBuilder()
      .insert()
      .into(Audio)
      .values(values)
      .execute();
  }
}
