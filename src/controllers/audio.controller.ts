import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { AudioCreateRequest } from '../interfaces/audio-create-request.interface';
import { AudioRequest } from '../interfaces/audio-request.interface';
import Audio from '../models/audio.model';
import { AudioService } from '../services/audio.service';

@Controller('audio')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @Get()
  async getAllAudios(): Promise<Audio[]> {
    return this.audioService.getAudios();
  }

  @Get(':id')
  async getAudio(@Param() params: AudioRequest): Promise<void> {
    return this.audioService.playAudio(params.id);
  }

  @Post()
  createAudio(@Body() request: AudioCreateRequest): Audio {
    return this.audioService.createAudio(request);
  }

  @Delete(':id')
  async deleteAudio(@Param() params: AudioRequest): Promise<DeleteResult> {
    return this.audioService.deleteAudio(params.id);
  }
}
