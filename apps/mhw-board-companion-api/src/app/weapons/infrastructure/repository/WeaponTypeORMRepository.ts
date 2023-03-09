import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { WeaponMapper } from './WeaponMapper';
import { WeaponEntity } from '../entity/Weapon.entity';
import { WeaponRepository } from '../../domain/repository/WeaponRepository';
import { WeaponResponse } from '../../domain/responses/WeaponResponse';
import { CreateWeaponRequest } from '../../domain/requests/CreateWeaponRequest';
import { UpdateWeaponRequest } from '../../domain/requests/UpdateWeaponRequest';
import { GetWeaponQuery } from '../../domain/requests/GetWeaponQuery';

@Injectable()
export class WeaponTypeORMRepository implements WeaponRepository {
  constructor(
    @InjectRepository(WeaponEntity)
    private weaponRepository: Repository<WeaponEntity>,
    private weaponMapper: WeaponMapper
  ) {}

  async find(id: string): Promise<WeaponResponse> {
    const weaponEntity = await this.weaponRepository.findOneBy({
      id,
      isActive: true,
    });

    if (!weaponEntity) {
      throw new NotFoundException(`Weapon with id ${id} not exist`);
    }

    return this.weaponMapper.fromEntity(weaponEntity);
  }

  async findAll(query?: Partial<GetWeaponQuery>): Promise<WeaponResponse[]> {
    const weaponEntities = await this.weaponRepository.find({
      where: {...query, isActive: true },
      relations: ['monster'],
    });
    return this.weaponMapper.fromEntities(weaponEntities);
  }

  async create(weapon: CreateWeaponRequest): Promise<WeaponResponse> {
    const newWeapon = this.weaponRepository.create(weapon);
    const weaponEntity = await this.weaponRepository.save(newWeapon);

    return this.weaponMapper.fromEntity(weaponEntity);
  }

  async update(
    id: string,
    weapon: UpdateWeaponRequest
  ): Promise<WeaponResponse> {
    await this.weaponRepository.update(id, weapon);
    const weaponEntity = await this.weaponRepository.findOneBy({
      id,
      isActive: true,
    });

    return this.weaponMapper.fromEntity(weaponEntity);
  }

  async delete(id: string): Promise<void> {
    const weaponEntity = await this.weaponRepository.findOneBy({
      id,
    });

    if (!weaponEntity) {
      throw new NotFoundException(`Weapon with id ${id} not exist`);
    }

    await this.weaponRepository.update(id, { isActive: false });
  }
}
