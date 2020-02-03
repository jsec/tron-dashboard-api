import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AudioController } from "./controllers/audio.controller";
import { GitController } from "./controllers/git.controller";
import { GitService } from "./services/git.service";
import { AudioService } from "./services/audio.service";
import { GitAdapter } from "./adapters/git.adapter";

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AudioController, GitController],
  providers: [GitService, AudioService, GitAdapter]
})
export class AppModule {}
