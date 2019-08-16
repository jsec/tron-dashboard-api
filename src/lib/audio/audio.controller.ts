import * as HttpStatus from 'http-status-codes';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as player from 'play-sound';
import {Repository, getRepository} from 'typeorm';
import Audio from '../entities/audio';

const options: Router.IRouterOptions = {
  prefix: '/audio',
};

const router: Router = new Router(options);

router.get('/', async (ctx: Koa.Context) => {
  const audioRepo: Repository<Audio> = getRepository(Audio);
  const audios = await audioRepo.find();

  ctx.body = {
    data: {audios},
  };
});

router.get('/:id', async (ctx: Koa.Context) => {
  const audioRepo: Repository<Audio> = getRepository(Audio);
  const audio: Audio = await audioRepo.findOne(ctx.params.id);

  if (!audio) ctx.throw(HttpStatus.NOT_FOUND);

  player().play(audio.filename, (err: any) => console.log(err));
  ctx.response.status = HttpStatus.OK;
});

router.post('/', async (ctx: Koa.Context) => {
  ctx.body = 'play';
});

router.delete('/:id', async (ctx: Koa.Context) => {
  ctx.body = 'delete';
});

export default router;