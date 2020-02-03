import { Module } from "@nestjs/common";
import { GitController } from "../controllers/git.controller";
import { GitService } from "../services/git.service";
import { GitAdapter } from "../adapters/git.adapter";

@Module({
  imports: [],
  controllers: [GitController],
  providers: [GitService, GitAdapter]
})
export class GitModule {}
