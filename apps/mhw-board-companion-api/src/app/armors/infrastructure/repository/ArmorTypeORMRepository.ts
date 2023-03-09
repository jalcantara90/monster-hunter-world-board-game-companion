import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { ArmorMapper } from './ArmorMapper';
import { ArmorEntity } from '../entity/Armor.entity';
import { ArmorRepository } from '../../domain/repository/ArmorRepository';
import { ArmorResponse } from '../../domain/responses/ArmorResponse';
import { CreateArmorRequest } from '../../domain/requests/CreateArmorRequest';
import { UpdateArmorRequest } from '../../domain/requests/UpdateArmorRequest';
import { GetArmorQuery } from '../../domain/requests/GetArmorQuery';

@Injectable()
export class ArmorTypeORMRepository implements ArmorRepository {
  constructor(
    @InjectRepository(ArmorEntity)
    private armorRepository: Repository<ArmorEntity>,
    private armorMapper: ArmorMapper
  ) {}

  async find(id: string): Promise<ArmorResponse> {
    const armorEntity = await this.armorRepository.findOne({
      where: {
        id,
        isActive: true,
      },
      relations: ['monster']
    });

    if (!armorEntity) {
      throw new NotFoundException(`Armor with id ${id} not exist`);
    }

    return this.armorMapper.fromEntity(armorEntity);
  }

  async findAll(query?: Partial<GetArmorQuery>): Promise<ArmorResponse[]> {
    const armorEntities = await this.armorRepository.find({
      where: {...query, isActive: true },
      relations: ['monster'],
    })
    return this.armorMapper.fromEntities(armorEntities);
  }

  async create(armor: CreateArmorRequest): Promise<ArmorResponse> {
    const newArmor = this.armorRepository.create(armor);
    const armorEntity = await this.armorRepository.save(newArmor);

    return this.armorMapper.fromEntity(armorEntity);
  }

  async update(
    id: string,
    armor: Partial<UpdateArmorRequest>
  ): Promise<ArmorResponse> {
    await this.armorRepository.update(id, { name: armor.name });
    const armorEntity = await this.armorRepository.findOneBy({
      id,
      isActive: true,
    });

    return this.armorMapper.fromEntity(armorEntity);
  }

  async delete(id: string): Promise<void> {
    const armorEntity = await this.armorRepository.findOneBy({
      id,
    });

    if (!armorEntity) {
      throw new NotFoundException(`Armor with id ${id} not exist`);
    }

    await this.armorRepository.update(id, { isActive: false });
  }
}
