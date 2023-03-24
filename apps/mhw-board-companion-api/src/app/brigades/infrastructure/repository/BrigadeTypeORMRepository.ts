import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { BrigadeMapper } from './BrigadeMapper';
import { BrigadeEntity } from '../entity/Brigade.entity';
import { BrigadeRepository } from '../../domain/repository/BrigadeRepository';
import { BrigadeResponse } from '../../domain/responses/BrigadeResponse';
import { CreateBrigadeRequest } from '../../domain/requests/CreateBrigadeRequest';
import { UpdateBrigadeRequest } from '../../domain/requests/UpdateBrigadeRequest';

@Injectable()
export class BrigadeTypeORMRepository implements BrigadeRepository {
  constructor(
    @InjectRepository(BrigadeEntity)
    private brigadeRepository: Repository<BrigadeEntity>,
    private brigadeMapper: BrigadeMapper
  ) {}

  async findAll(): Promise<BrigadeResponse[]> {
    const brigadeEntityList = await this.brigadeRepository.find();
    return this.brigadeMapper.fromEntities(brigadeEntityList);
  }

  async find(id: string): Promise<BrigadeResponse> {
    const brigadeEntity = await this.brigadeRepository.findOneBy({ id, isActive: true });

    if (!brigadeEntity) {
      throw new NotFoundException(`Brigade with id ${id} not exist`);
    }

    return this.brigadeMapper.fromEntity(brigadeEntity);
  }

  async create(brigade: CreateBrigadeRequest): Promise<BrigadeResponse> {
    const newBrigade = this.brigadeRepository.create({ name: brigade.name });
    const brigadeEntity = await this.brigadeRepository.save(newBrigade);

    return this.brigadeMapper.fromEntity(brigadeEntity);
  }

  async update(
    id: string,
    brigade: UpdateBrigadeRequest
  ): Promise<BrigadeResponse> {
    await this.brigadeRepository.update(id, { name: brigade.name });
    const brigadeEntity = await this.brigadeRepository.findOneBy({ id, isActive: true });

    return this.brigadeMapper.fromEntity(brigadeEntity);
  }

  async delete(id: string): Promise<void> {
    const brigadeEntity = await this.brigadeRepository.findOneBy({
      id,
    });

    if (!brigadeEntity) {
      throw new NotFoundException(`Brigade with id ${id} not exist`);
    }

    await this.brigadeRepository.update(id, { isActive: false });
  }
}
