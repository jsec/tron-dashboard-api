import { GitAdapter } from '../adapters/git.adapter';
import { GitPullRequest } from 'azure-devops-node-api/interfaces/GitInterfaces';
import { IGitApi } from 'azure-devops-node-api/GitApi';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GitService {
  constructor(private readonly gitAdapter: GitAdapter) {}

  public async getPullRequests(): Promise<GitPullRequest[]> {
    const gitApi: IGitApi = await this.gitAdapter.init();
    const repos = await gitApi.getRepositories(process.env.AZURE_API_PROJECT_NAME);

    const repo = repos.find(r => r.name === process.env.AZURE_API_REPOSITORY_NAME);

    return await gitApi.getPullRequests(repo.id, {});
  }
}
