import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  INVENTORY_REPOSITORY,
  InventoryRepository,
} from '../../domain/repository/InventoryRepository';
import { GetInventorieListCommand } from './GetInventorieList.command';

@CommandHandler(GetInventorieListCommand)
export class GetInventorieListHandler
  implements ICommandHandler<GetInventorieListCommand>
{
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventorieRepository: InventoryRepository
  ) {}

  async execute(command: GetInventorieListCommand) {
    return this.inventorieRepository.findAll(command.query);
  }
}
