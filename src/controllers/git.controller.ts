import { Controller, Get } from "@nestjs/common";
import { GitPullRequest } from "azure-devops-node-api/interfaces/GitInterfaces";
import { GitService } from "../services/git.service";

@Controller("git")
export class GitController {
  constructor(private readonly gitService: GitService) {}

  @Get()
  async getPullRequests(): Promise<GitPullRequest[]> {
    return this.gitService.getPullRequests();
  }
}
