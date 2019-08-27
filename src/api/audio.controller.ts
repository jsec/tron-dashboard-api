import * as HttpStatus from 'http-status-codes';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as player from 'play-sound';
import {Repository, getRepository} from 'typeorm';
import Audio from '../models/audio';

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

  ctx.status = HttpStatus.OK;
});

router.post('/', async (ctx: Koa.Context) => {
  const audioRepo: Repository<Audio> = getRepository(Audio);
  const audios: Audio[] = audioRepo.create(ctx.request.body);
  ctx.body = {
    data: {audios},
  };

  ctx.status = HttpStatus.CREATED;
});

router.delete('/:id', async (ctx: Koa.Context) => {
  const audioRepo: Repository<Audio> = getRepository(Audio);
  const audio: Audio = await audioRepo.findOne(ctx.params.id);

  if (!audio) ctx.throw(HttpStatus.NOT_FOUND);

  await audioRepo.delete(audio);

  ctx.status = HttpStatus.NO_CONTENT;
});

export default router;
