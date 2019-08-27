import {readdirSync} from 'fs';
import {join, basename, extname} from 'path';
import {Factory, Seeder} from 'typeorm-seeding';
import {Connection} from 'typeorm/connection/Connection';
import Audio from '../../models/audio';

export default class CreateAudios implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const seedFolder: string = '/home/jsec/tmp/test_audio';

    let values: Audio[] = readdirSync(seedFolder).map(file => {
      let audio = new Audio();
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
