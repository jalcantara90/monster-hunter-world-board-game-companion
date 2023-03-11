import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  INVENTORY_REPOSITORY,
  InventoryRepository,
} from '../../domain/repository/InventoryRepository';
import { GetInventorieCommand } from './GetInventorie.command';

@CommandHandler(GetInventorieCommand)
export class GetInventorieHandler
  implements ICommandHandler<GetInventorieCommand>
{
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventorieRepository: InventoryRepository
  ) {}

  async execute(command: GetInventorieCommand) {
    return this.inventorieRepository.find(command.id);
  }
}
