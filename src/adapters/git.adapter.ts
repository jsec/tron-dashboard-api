import { WebApi } from 'azure-devops-node-api';
import { IGitApi } from 'azure-devops-node-api/GitApi';
import { GitPullRequest } from 'azure-devops-node-api/interfaces/GitInterfaces';
import { getApi } from '../connections/git.connection';

export default class GitAdapter {
  private _connection: IGitApi;

  public async init(): Promise<void> {
    const apiConnection: WebApi = await getApi();
    this._connection = await apiConnection.getGitApi();
  }

  public async getPullRequests(): Promise<GitPullRequest[]> {
    const repos = await this._connection.getRepositories(
      process.env.AZURE_API_PROJECT_NAME
    );

    const repo = repos.find(
      r => r.name === process.env.AZURE_API_REPOSITORY_NAME
    );

    const pullRequests: GitPullRequest[] = await this._connection.getPullRequests(
      repo.id,
      {}
    );

    return pullRequests;
  }
}
