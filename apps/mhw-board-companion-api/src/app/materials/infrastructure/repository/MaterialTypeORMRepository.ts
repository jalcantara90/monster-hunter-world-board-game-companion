import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { MaterialMapper } from './MaterialMapper';
import { MaterialEntity } from '../entity/Material.entity';
import { MaterialRepository } from '../../domain/repository/MaterialRepository';
import { MaterialResponse } from '../../domain/responses/MaterialResponse';
import { CreateMaterialRequest } from '../../domain/requests/CreateMaterialRequest';
import { UpdateMaterialRequest } from '../../domain/requests/UpdateMaterialRequest';
import { GetMaterialsQuery } from '../../domain/requests/GetMaterialsQuery';

@Injectable()
export class MaterialTypeORMRepository implements MaterialRepository {
  constructor(
    @InjectRepository(MaterialEntity)
    private materialRepository: Repository<MaterialEntity>,
    private materialMapper: MaterialMapper
  ) {}

  async findAll(query?: GetMaterialsQuery): Promise<MaterialResponse[]> {
    const materialEntities = await this.materialRepository.findBy({ ...query, isActive: true });

    return this.materialMapper.fromEntities(materialEntities);
  }

  async find(id: string): Promise<MaterialResponse> {
    const materialEntity = await this.materialRepository.findOneBy({
      id,
      isActive: true,
    });

    if (!materialEntity) {
      throw new NotFoundException(`Material with id ${id} not exist`);
    }

    return this.materialMapper.fromEntity(materialEntity);
  }

  async create(material: CreateMaterialRequest): Promise<MaterialResponse> {
    const newMaterial = this.materialRepository.create(material);
    const materialEntity = await this.materialRepository.save(newMaterial);

    return this.materialMapper.fromEntity(materialEntity);
  }

  async update(
    id: string,
    material: UpdateMaterialRequest
  ): Promise<MaterialResponse> {
    await this.materialRepository.update(id, { name: material.name });
    const materialEntity = await this.materialRepository.findOneBy({
      id,
      isActive: true,
    });

    return this.materialMapper.fromEntity(materialEntity);
  }

  async delete(id: string): Promise<void> {
    const materialEntity = await this.materialRepository.findOneBy({
      id,
    });

    if (!materialEntity) {
      throw new NotFoundException(`Material with id ${id} not exist`);
    }

    await this.materialRepository.update(id, { isActive: false });
  }
}
