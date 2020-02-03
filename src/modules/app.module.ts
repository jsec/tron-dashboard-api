import { Module } from "@nestjs/common";
import { AudioModule } from "./audio.module";
import { GitModule } from "./git.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(), AudioModule, GitModule],
  controllers: [],
  providers: []
})
export class AppModule {}
