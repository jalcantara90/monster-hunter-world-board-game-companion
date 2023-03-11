import { Injectable } from '@nestjs/common';

import { InventorieResponse } from '../../domain/responses/InventorieResponse';
import { InventoryEntity } from '../entity/Inventory.entity';

@Injectable()
export class InventoryMapper {
  fromEntity(inventory: InventoryEntity): InventorieResponse {
    return new InventorieResponse(
      inventory.id,
      inventory.campaignId,
      inventory.hunterId
    );
  }

  fromEntities(inventorieList: InventoryEntity[]): InventorieResponse[] {
    return inventorieList.map((inventory) => this.fromEntity(inventory));
  }
}
