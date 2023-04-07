import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  INVENTORY_REPOSITORY,
  InventoryRepository,
} from '../../domain/repository/InventoryRepository';
import { UpdateInventoryItemCommand } from './UpdateInventoryItem.command';

@CommandHandler(UpdateInventoryItemCommand)
export class UpdateInventoryItemHandler
  implements ICommandHandler<UpdateInventoryItemCommand>
{
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventorieRepository: InventoryRepository
  ) {}

  async execute(command: UpdateInventoryItemCommand) {
    const { inventoryMaterialId, quantity } = command;
    return this.inventorieRepository.updateInventoryItem(inventoryMaterialId, {
      quantity,
    });
  }
}
