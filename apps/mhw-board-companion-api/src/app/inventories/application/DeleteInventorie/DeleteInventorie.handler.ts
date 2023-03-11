import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteInventorieCommand } from './DeleteInventorie.command';
import {
  INVENTORY_REPOSITORY,
  InventoryRepository,
} from '../../domain/repository/InventoryRepository';

@CommandHandler(DeleteInventorieCommand)
export class DeleteInventorieHandler
  implements ICommandHandler<DeleteInventorieCommand>
{
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventorieRepository: InventoryRepository
  ) {}

  async execute(command: DeleteInventorieCommand) {
    await this.inventorieRepository.delete(command.id);
  }
}
