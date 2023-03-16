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
      relations: ['materialId']
    });
    return this.armorCraftingMaterialsMapper.fromEntities(armorCraftingEntities);
  }

  async create(
    armorId: string,
    { quantity, materialId }: CreateCraftingMaterialRequest
  ): Promise<any> {
    const newCraftingMaterial = this.armorCraftingRepository.create({
      armorId,
      quantity,
      materialId,
    });
    const craftingMaterial = await this.armorCraftingRepository.save(newCraftingMaterial);

    return craftingMaterial;
  }

  async delete(id: string): Promise<void> {
    // const armorEntity = await this.armorCraftingRepository.findOneBy({
    //   id,
    // });

    // if (!armorEntity) {
    //   throw new NotFoundException(`Armor with id ${id} not exist`);
    // }

    // await this.armorCraftingRepository.update(id, { isActive: false });
  }
}
