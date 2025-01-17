import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { DatabaseModule } from 'src/core/database/database.module';
import { validate } from 'src/core/config/env.validation';
import appConfig from './core/config/app.config';
import dbConfig from './core/config/db.config';
import authConfig from './core/config/auth.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.stage', '.env.prod'],
      load: [appConfig, authConfig, dbConfig],
      isGlobal: true,
      validate,
    }),
    DatabaseModule,

  ]
})
export class AppModule { }
