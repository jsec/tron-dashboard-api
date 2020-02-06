import { Module, MiddlewareConsumer } from "@nestjs/common";
import { AudioModule } from "./audio.module";
import { GitModule } from "./git.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MorganMiddleware } from "@nest-middlewares/morgan";

@Module({
  imports: [TypeOrmModule.forRoot(), AudioModule, GitModule],
  controllers: [],
  providers: []
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    MorganMiddleware.configure("dev");
    consumer.apply(MorganMiddleware).forRoutes("/");
  }
}
