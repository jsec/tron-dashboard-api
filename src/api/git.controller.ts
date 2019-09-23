import * as HttpStatus from 'http-status-codes';
import * as Router from 'koa-router';
import * as Koa from 'koa';
import { GitPullRequest } from 'azure-devops-node-api/interfaces/GitInterfaces';
import GitAdapter from '../adapters/git.adapter';

const options: Router.IRouterOptions = {
  prefix: '/git'
};

const router: Router = new Router(options);

router.get('/', async (ctx: Koa.Context) => {
  const adapter: GitAdapter = new GitAdapter();
  await adapter.init();
  await adapter.getPullRequests();
  const pullRequests: GitPullRequest[] = await adapter.getPullRequests();
  ctx.body = pullRequests;
  ctx.status = HttpStatus.OK;
});

export default router;
