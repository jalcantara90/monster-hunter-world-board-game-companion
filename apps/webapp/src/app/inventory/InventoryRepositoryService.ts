import { environment } from '../../environments/environment';
import { UpdateInventoryItemRequest } from './types';

interface IInventoryRepositoryService {
  updateInventoryItem(
    inventoryMaterialId: string,
    request: UpdateInventoryItemRequest
  ): Promise<void>;
  addInventoryMaterial(inventoryId: string, materialId: string): Promise<void>;
  craftWeapon(inventoryId: string, weaponId: string): Promise<void>;
  craftArmor(inventoryId: string, armorId: string): Promise<void>;
}

export class InventoryRepositoryService implements IInventoryRepositoryService {
  private readonly baseUrl = `${environment.baseUrl}/inventories`;

  async updateInventoryItem(
    inventoryMaterialId: string,
    request: UpdateInventoryItemRequest
  ): Promise<void> {
    fetch(`${this.baseUrl}/material/${inventoryMaterialId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(request),
    });
  }

  async addInventoryMaterial(
    inventoryId: string,
    materialId: string
  ): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${inventoryId}/materials`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        materialId,
        quantity: 1,
      }),
    });

    if (!response.ok) {
      throw await response.json();
    }
  }

  async craftWeapon(inventoryId: string, weaponId: string): Promise<void> {
    const response = await fetch(
      `${this.baseUrl}/${inventoryId}/weapons/${weaponId}/craft`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const json = await response.json();
      throw json.message;
    }
  }

  async craftArmor(inventoryId: string, armorId: string): Promise<void> {
    const response = await fetch(
      `${this.baseUrl}/${inventoryId}/armors/${armorId}/craft`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const json = await response.json();
      throw json.message;
    }
  }
}
