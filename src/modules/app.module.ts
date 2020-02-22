import { MiddlewareConsumer, Module } from '@nestjs/common';

import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '../filters/http-exception.filter';
import { AudioModule } from './audio.module';
import { GitModule } from './git.module';
import { MorganMiddleware } from '@nest-middlewares/morgan';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), AudioModule, GitModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    }
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    MorganMiddleware.configure('dev');
    consumer.apply(MorganMiddleware).forRoutes('/');
  }
}
