import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AttractionModule } from './attraction/attraction.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Attraction} from './attraction/entities/attraction.entity.js'
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    AttractionModule,
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs_basic',
      entities: [Attraction ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
