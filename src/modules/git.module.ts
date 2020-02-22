import { GitAdapter } from '../adapters/git.adapter';
import { GitController } from '../controllers/git.controller';
import { GitService } from '../services/git.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [GitController],
  providers: [GitService, GitAdapter]
})
export class GitModule {}
