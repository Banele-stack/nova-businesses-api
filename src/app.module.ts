import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BusinessModule } from "./business/business.module";
import { Business } from "./business/entities/business.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

   TypeOrmModule.forRoot({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Business],
  synchronize: true,
}),

    BusinessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}