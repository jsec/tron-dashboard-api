import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Audio from "../models/audio.model";
import * as player from "play-sound";

@Injectable()
export class AudioService {
  constructor(
    @InjectRepository(Audio) private readonly audioRepository: Repository<Audio>
  ) {}

  public async getAudios(): Promise<Audio[]> {
    return this.audioRepository.find();
  }

  public async playAudio(audioId: string): Promise<void> {
    const audio: Audio = await this.audioRepository.findOne(audioId);
    player().play(audio.filename, (err: any) => console.error(err));
  }

  public createAudio(): void {}

  public async deleteAudio(audioId: string): Promise<void> {
    const audio: Audio = await this.audioRepository.findOne(audioId);
    this.audioRepository.delete(audio);
  }
}
