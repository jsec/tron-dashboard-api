import * as player from 'play-sound';

import { DeleteResult, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import Audio from '../models/audio.model';
import { AudioCreateRequest } from '../interfaces/audio-create-request.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AudioService {
  constructor(@InjectRepository(Audio) private readonly audioRepository: Repository<Audio>) {}

  public async getAudios(): Promise<Audio[]> {
    return this.audioRepository.find();
  }

  public async playAudio(audioId: string): Promise<void> {
    const audio: Audio = await this.audioRepository.findOne(audioId);
    if (!audio) throw new NotFoundException('Audio file not found');

    player().play(audio.filename, err => console.error(err));
  }

  public createAudio(request: AudioCreateRequest): Audio {
    return this.audioRepository.create(request);
  }

  public async deleteAudio(audioId: string): Promise<DeleteResult> {
    const audio: Audio = await this.audioRepository.findOne(audioId);
    if (!audio) throw new NotFoundException('Audio file not found');

    return this.audioRepository.delete(audio);
  }
}
