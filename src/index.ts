import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

interface AudioRequest {
  filename: string;
}

router.get('/', async (ctx, next) => {
  ctx.body = {'wat'};
  await next();
});

router.post('/audio', async (ctx, next) => {
  const name = <AudioRequest>ctx.request.body;
  ctx.body = {name};
  await next();
});

app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
