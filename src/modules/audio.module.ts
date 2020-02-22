import Audio from '../models/audio.model';
import { AudioController } from '../controllers/audio.controller';
import { AudioService } from '../services/audio.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Audio])],
  providers: [AudioService],
  controllers: [AudioController],
  exports: [AudioService]
})
export class AudioModule {}
