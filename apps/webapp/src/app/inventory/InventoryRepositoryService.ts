import { UpdateInventoryItemRequest } from './types';

interface IInventoryRepositoryService {
  updateInventoryItem(
    inventoryMaterialId: string,
    request: UpdateInventoryItemRequest
  ): Promise<void>;

  addInventoryMaterial(inventoryId: string, materialId: string): Promise<void>;
}

export class InventoryRepositoryService implements IInventoryRepositoryService {
  private readonly baseUrl = 'http://localhost:3099/api/inventories';

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
}
