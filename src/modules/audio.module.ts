import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Audio from '../models/audio.model';
import { AudioService } from '../services/audio.service';
import { AudioController } from '../controllers/audio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Audio])],
  providers: [AudioService],
  controllers: [AudioController],
  exports: [AudioService]
})
export class AudioModule {}
