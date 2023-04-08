import { UpdateResult } from 'typeorm';
import { CreateInventoryRequest } from '../requests/CreateInventorieRequest';
import { GetInventorieQuery } from '../requests/GetInventorieQuery';
import { InventorieResponse } from '../responses/InventorieResponse';
import { AddMaterialToInventoryRequest } from '../requests/AddMaterialToInventoryRequest';
import { AddArmorRequest } from '../requests/AddArmorRequest';
import { AddWeaponRequest } from '../requests/AddWeaponRequest';
import { UpdateInventoryMaterialRequest } from '../requests/UpdateInventoryMaterialRequest';
import { InventoryItemsEntity } from '../../infrastructure/entity/Inventory.entity';
import { GetInventoryByCampaignHunterRequest } from '../requests/GetInventoryByCampaignHunterRequest';

export interface InventoryRepository {
  find(id: string): Promise<InventorieResponse>;
  findByCampaignAndHunterId(
    query: GetInventoryByCampaignHunterRequest
  ): Promise<InventorieResponse>;
  findAll(query?: Partial<GetInventorieQuery>): Promise<InventorieResponse[]>;
  create(inventory: CreateInventoryRequest): Promise<InventorieResponse>;
  updateInventoryItem(
    id: string,
    inventory: UpdateInventoryMaterialRequest
  ): Promise<UpdateResult>;
  AddMaterial(
    inventoryId: string,
    request: AddMaterialToInventoryRequest
  ): Promise<void>;
  AddArmor(inventoryId: string, request: AddArmorRequest): Promise<void>;
  AddWeapon(inventoryId: string, request: AddWeaponRequest): Promise<void>;
  delete(id: string): Promise<void>;
  findAllMaterials(inventoryId: string): Promise<InventoryItemsEntity[]>;
}

export const INVENTORY_REPOSITORY = 'INVENTORY_REPOSITORY';
