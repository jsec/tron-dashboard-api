import {Factory, Seeder} from 'typeorm-seeding';
import {Connection} from 'typeorm/connection/Connection';

export default class CreateAudios implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    //TODO: Get files from test folder and convert to Audio entities
    await connection
      .createQueryBuilder()
      .insert()
      .into(Audio)
      .values([])
      .execute();
  }
}
