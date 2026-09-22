import { Module } from '@nestjs/common';
import { AttractionService } from './attraction.service.js';
import { AttractionController } from './attraction.controller.js';
import { Attraction } from './entities/attraction.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Attraction])],
  controllers: [AttractionController],
  providers: [AttractionService],
})
export class AttractionModule {}
