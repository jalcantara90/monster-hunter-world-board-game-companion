import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateInventoryCommand } from './CreateInventory.command';
import {
  InventoryRepository,
  INVENTORY_REPOSITORY,
} from '../../domain/repository/InventoryRepository';

@CommandHandler(CreateInventoryCommand)
export class CreateInventoryeHandler
  implements ICommandHandler<CreateInventoryCommand>
{
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventorieRepository: InventoryRepository
  ) {}

  async execute(command: CreateInventoryCommand) {
    return this.inventorieRepository.create(command);
  }
}
