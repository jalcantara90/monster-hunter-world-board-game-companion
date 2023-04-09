import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ArmorCraftingEntity } from '../entity/Armor.entity';
import { ArmorCraftingRepository } from '../../domain/repository/ArmorCraftingRepository';
import { CreateCraftingMaterialRequest } from '../../domain/requests/CreateCraftingMaterialRequest';
import { ArmorCraftingMaterialMapper } from './CraftingMaterialMapper';
import { CraftingMaterialResponse } from '../../domain/responses/CraftingMaterialResponse';

@Injectable()
export class ArmorCraftingTypeORMRepository implements ArmorCraftingRepository {
  constructor(
    @InjectRepository(ArmorCraftingEntity)
    private armorCraftingRepository: Repository<ArmorCraftingEntity>,
    private armorCraftingMaterialsMapper: ArmorCraftingMaterialMapper
  ) {}

  async find(armorId: string): Promise<CraftingMaterialResponse[]> {
    const armorCraftingEntities = await this.armorCraftingRepository.find({
      where: { armorId },
      relations: ['materialId'],
    });
    return this.armorCraftingMaterialsMapper.fromEntities(
      armorCraftingEntities
    );
  }

  async findAll(): Promise<CraftingMaterialResponse[]> {
    const weaponCraftingEntities = await this.armorCraftingRepository.find({
      relations: ['materialId']
    });

    return this.armorCraftingMaterialsMapper.fromEntities(
      weaponCraftingEntities
    );
  }

  async create(
    armorId: string,
    { quantity, materialId }: CreateCraftingMaterialRequest
  ): Promise<CraftingMaterialResponse> {
    const newCraftingMaterial = this.armorCraftingRepository.create({
      armorId,
      quantity,
      materialId,
    });
    const craftingMaterial = await this.armorCraftingRepository.save(
      newCraftingMaterial
    );

    return this.armorCraftingMaterialsMapper.fromEntity(craftingMaterial);
  }
}
