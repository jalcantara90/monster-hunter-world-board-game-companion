import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UpdateInventorieCommand } from './UpdateInventorie.command';
import {
  INVENTORY_REPOSITORY,
  InventoryRepository,
} from '../../domain/repository/InventoryRepository';

@CommandHandler(UpdateInventorieCommand)
export class UpdateInventorieHandler
  implements ICommandHandler<UpdateInventorieCommand>
{
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventorieRepository: InventoryRepository
  ) {}

  async execute(command: UpdateInventorieCommand) {
    return this.inventorieRepository.update(command.id, { name: command.name });
  }
}
