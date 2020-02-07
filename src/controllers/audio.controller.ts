import { Controller, Get, Param, Post, Delete } from "@nestjs/common";
import { AudioService } from "../services/audio.service";
import Audio from "../models/audio.model";
import { AudioRequest } from "../interfaces/audio-request.interface";
import { DeleteResult } from "typeorm";

@Controller("audio")
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @Get()
  async getAllAudios(): Promise<Audio[]> {
    return this.audioService.getAudios();
  }

  @Get(":id")
  async getAudio(@Param() params: AudioRequest): Promise<void> {
    return this.audioService.playAudio(params.id);
  }

  @Post()
  createAudio(): void {
    return this.audioService.createAudio();
  }

  @Delete(":id")
  async deleteAudio(@Param() params: AudioRequest): Promise<DeleteResult> {
    return this.audioService.deleteAudio(params.id);
  }
}
