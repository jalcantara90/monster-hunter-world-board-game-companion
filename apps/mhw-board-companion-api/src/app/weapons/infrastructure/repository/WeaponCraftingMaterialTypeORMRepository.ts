import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { WeaponCraftingRepository } from '../../domain/repository/WeaponCraftingRepository';
import { WeaponCraftingEntity } from '../entity/Weapon.entity';
import { WeaponCraftingMaterialMapper } from './WeaponCraftingMapper';
import { WeaponCraftingMaterialResponse } from '../../domain/responses/WeaponCraftingMaterialResponse';
import { CreateCraftingMaterialRequest } from '../../domain/requests/CreateCraftingMaterialRequest';

@Injectable()
export class WeaponCraftingTypeORMRepository
  implements WeaponCraftingRepository
{
  constructor(
    @InjectRepository(WeaponCraftingEntity)
    private weaponCraftingRepository: Repository<WeaponCraftingEntity>,
    private weaponCraftingMaterialMapper: WeaponCraftingMaterialMapper
  ) {}

  async find(weaponId: string): Promise<WeaponCraftingMaterialResponse[]> {
    const weaponCraftingEntities = await this.weaponCraftingRepository.find({
      where: { weaponId },
      relations: ['materialId'],
    });
    return this.weaponCraftingMaterialMapper.fromEntities(
      weaponCraftingEntities
    );
  }

  async findAll(): Promise<WeaponCraftingMaterialResponse[]> {
    const weaponCraftingEntities = await this.weaponCraftingRepository.find({
      relations: ['materialId']
    });

    return this.weaponCraftingMaterialMapper.fromEntities(
      weaponCraftingEntities
    );
  }

  async create(
    weaponId: string,
    { quantity, materialId }: CreateCraftingMaterialRequest
  ): Promise<WeaponCraftingMaterialResponse> {
    const newCraftingMaterial = this.weaponCraftingRepository.create({
      weaponId,
      quantity,
      materialId,
    });
    const craftingMaterial = await this.weaponCraftingRepository.save(
      newCraftingMaterial
    );

    return this.weaponCraftingMaterialMapper.fromEntity(craftingMaterial);
  }
}
