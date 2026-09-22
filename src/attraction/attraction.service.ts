import { Injectable } from '@nestjs/common';
import { CreateAttractionDto } from './dto/create-attraction.dto.js';
import { UpdateAttractionDto } from './dto/update-attraction.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attraction } from './entities/attraction.entity.js';

@Injectable()
export class AttractionService {
  constructor(
    @InjectRepository(Attraction)
    private attractionRepository: Repository<Attraction>,
  ) {}

  async create(createAttractionDto: CreateAttractionDto) {
    const attraction =
      await this.attractionRepository.create(createAttractionDto);
    const toCreate = await this.attractionRepository.insert(attraction);
    return toCreate;
  }

  findAll(): Promise<Attraction[]> {
    return this.attractionRepository.find();
  }

  findOne(id: number): Promise<Attraction | null> {
    return this.attractionRepository.findOneBy({ id });
  }

  async update(id: number, updateAttractionDto: UpdateAttractionDto) {
    let attraction = await this.attractionRepository.findOneBy({ id });

    if (!attraction) {
      throw new Error('Attraction not found');
    }

    attraction = {
      ...attraction,

      ...updateAttractionDto,
    };

    return this.attractionRepository.save(attraction);
  }

  async remove(id: number): Promise<void> {
    await this.attractionRepository.delete(id);
  }
}
