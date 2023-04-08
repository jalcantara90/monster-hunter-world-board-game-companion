import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { InventoryMapper } from './InventoryMapper';
import {
  InventoryEntity,
  InventoryItemsEntity,
} from '../entity/Inventory.entity';
import { InventoryRepository } from '../../domain/repository/InventoryRepository';
import { InventorieResponse } from '../../domain/responses/InventorieResponse';
import { CreateInventoryRequest } from '../../domain/requests/CreateInventorieRequest';
import { GetInventorieQuery } from '../../domain/requests/GetInventorieQuery';
import { AddMaterialToInventoryRequest } from '../../domain/requests/AddMaterialToInventoryRequest';
import { AddArmorRequest } from '../../domain/requests/AddArmorRequest';
import { AddWeaponRequest } from '../../domain/requests/AddWeaponRequest';
import { UpdateInventoryMaterialRequest } from '../../domain/requests/UpdateInventoryMaterialRequest';
import { GetInventoryByCampaignHunterRequest } from '../../domain/requests/GetInventoryByCampaignHunterRequest';

@Injectable()
export class InventoryTypeORMRepository implements InventoryRepository {
  constructor(
    @InjectRepository(InventoryEntity)
    private inventoryRepository: Repository<InventoryEntity>,
    @InjectRepository(InventoryItemsEntity)
    private inventoryItemRepository: Repository<InventoryItemsEntity>,
    private inventoryMapper: InventoryMapper
  ) {}

  async findByCampaignAndHunterId({
    campaignId,
    hunterId,
  }: GetInventoryByCampaignHunterRequest): Promise<InventorieResponse> {
    const result = await this.inventoryRepository
      .createQueryBuilder('inventories')
      .where('inventories.campaign = :campaignId', { campaignId })
      .andWhere('inventories.hunter = :hunterId', { hunterId })
      .getOne();

    return this.inventoryMapper.fromEntity(result);
  }

  updateInventoryItem(
    id: string,
    { quantity }: UpdateInventoryMaterialRequest
  ) {
    return this.inventoryItemRepository.update(id, { quantity });
  }

  async findAllMaterials(inventoryId: string) {
    const materials = await this.inventoryItemRepository
      .createQueryBuilder('inventory_items')
      .leftJoinAndSelect('inventory_items.material', 'material')
      .leftJoinAndSelect('inventory_items.armor', 'armor')
      .leftJoinAndSelect('inventory_items.weapon', 'weapon')
      .where('inventory_items.inventoryId = :inventoryId', { inventoryId })
      .getMany();

    return materials;
  }

  async AddArmor(inventoryId: string, request: AddArmorRequest): Promise<void> {
    const armor = this.inventoryItemRepository.create({
      inventoryId,
      armor: request.armorId,
    });

    const storedArmor = await this.inventoryItemRepository
      .createQueryBuilder('inventory_items')
      .leftJoinAndSelect('inventory_items.armor', 'armor')
      .where('armor.id = :armorId', { armorId: request.armorId })
      .andWhere('inventory_items.inventoryId = :inventoryId', { inventoryId })
      .getOne();

    if (!storedArmor) {
      this.inventoryItemRepository.save(armor);
    }
  }

  async AddWeapon(
    inventoryId: string,
    request: AddWeaponRequest
  ): Promise<void> {
    const armor = this.inventoryItemRepository.create({
      inventoryId,
      weapon: request.weaponId,
    });

    const storedWeapon = await this.inventoryItemRepository
      .createQueryBuilder('inventory_items')
      .leftJoinAndSelect('inventory_items.weapon', 'weapon')
      .where('weapon.id = :weaponId', { weaponId: request.weaponId })
      .andWhere('inventory_items.inventoryId = :inventoryId', { inventoryId })
      .getOne();

    if (!storedWeapon) {
      this.inventoryItemRepository.save(armor);
    }
  }

  async AddMaterial(
    inventoryId: string,
    request: AddMaterialToInventoryRequest
  ): Promise<any> {
    const material = this.inventoryItemRepository.create({
      inventoryId: inventoryId,
      material: request.materialId,
      quantity: request.quantity,
    });

    return await this.inventoryItemRepository.insert(material);
  }

  async find(id: string): Promise<InventorieResponse> {
    const inventoryEntity = await this.inventoryRepository.findOneBy({
      id,
      isActive: true,
    });

    if (!inventoryEntity) {
      throw new NotFoundException(`inventory with id ${id} not exist`);
    }

    return this.inventoryMapper.fromEntity(inventoryEntity);
  }

  async findAll(
    query?: Partial<GetInventorieQuery>
  ): Promise<InventorieResponse[]> {
    const inventoryEntities = await this.inventoryRepository.find({
      where: { ...query, isActive: true },
    });
    return this.inventoryMapper.fromEntities(inventoryEntities);
  }

  async create(inventory: CreateInventoryRequest): Promise<InventorieResponse> {
    const inventoryEntity = await this.inventoryRepository.save({
      hunter: inventory.hunterId,
      campaign: inventory.campaignId,
    });

    return this.inventoryMapper.fromEntity(inventoryEntity);
  }

  async delete(id: string): Promise<void> {
    const inventoryEntity = await this.inventoryRepository.findOneBy({
      id,
    });

    if (!inventoryEntity) {
      throw new NotFoundException(`inventory with id ${id} not exist`);
    }

    await this.inventoryRepository.update(id, { isActive: false });
  }
}
