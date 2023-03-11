import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import {
  InventoryRepository,
  INVENTORY_REPOSITORY,
} from '../../domain/repository/InventoryRepository';
import { AddMaterialCommand } from './AddMaterial.command';

@CommandHandler(AddMaterialCommand)
export class AddMaterialHandler implements ICommandHandler<AddMaterialCommand> {
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventorieRepository: InventoryRepository
  ) {}

  async execute(command: AddMaterialCommand) {
    const { inventoryId, ...material } = command;
    return this.inventorieRepository.AddMaterial(inventoryId, material);
  }
}
