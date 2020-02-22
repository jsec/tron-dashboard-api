import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Audio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  filename: string;
}
