import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AudioModule } from './audio.module';
import { GitModule } from './git.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MorganMiddleware } from '@nest-middlewares/morgan';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '../filters/http-exception.filter';

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
