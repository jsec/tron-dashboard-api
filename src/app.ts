import * as Koa from 'koa';
import * as cors from '@koa/cors';
import * as HttpStatus from 'http-status-codes';
import audioController from './api/audio.controller';

const app: Koa = new Koa();

app.use(cors());

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status =
      error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body = {error};
    ctx.app.emit('error', error, ctx);
  }
});

app.use(audioController.routes());
app.use(audioController.allowedMethods());

app.use(async (ctx: Koa.Context) => {
  ctx.body = 'Hello World';
});

app.on('error', console.error);

export default app;
