import { CreateInventoryRequest } from '../requests/CreateInventorieRequest';
import { UpdateInventorieRequest } from '../requests/UpdateInventorieRequest';
import { GetInventorieQuery } from '../requests/GetInventorieQuery';
import { InventorieResponse } from '../responses/InventorieResponse';
import { AddMaterialToInventoryRequest } from '../requests/AddMaterialToInventoryRequest';
import { AddArmorRequest } from '../requests/AddArmorRequest';
import { AddWeaponRequest } from '../requests/AddWeaponRequest';
import { UpdateInventoryMaterialRequest } from '../requests/UpdateInventoryMaterialRequest';

export interface InventoryRepository {
  find(id: string): Promise<InventorieResponse>;
  findAll(query?: Partial<GetInventorieQuery>): Promise<InventorieResponse[]>;
  create(inventory: CreateInventoryRequest): Promise<InventorieResponse>;
  update(
    id: string,
    inventory: UpdateInventorieRequest
  ): Promise<InventorieResponse>;
  updateInventoryItem(
    id: string,
    inventory: UpdateInventoryMaterialRequest
  ): Promise<any>;
  AddMaterial(
    inventoryId: string,
    request: AddMaterialToInventoryRequest
  ): Promise<void>;
  AddArmor(
    inventoryId: string,
    request: AddArmorRequest
  ): Promise<void>;
  AddWeapon(
    inventoryId: string,
    request: AddWeaponRequest
  ): Promise<void>;
  delete(id: string): Promise<void>;
  findAllMaterials(inventoryId: string): Promise<any[]>;
}

export const INVENTORY_REPOSITORY = 'INVENTORY_REPOSITORY';
