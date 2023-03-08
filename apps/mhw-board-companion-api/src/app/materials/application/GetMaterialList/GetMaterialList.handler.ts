import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  MATERIAL_REPOSITORY,
  MaterialRepository,
} from '../../domain/repository/MaterialRepository';
import { GetMaterialListCommand } from './GetMaterialList.command';

@CommandHandler(GetMaterialListCommand)
export class GetMaterialListHandler implements ICommandHandler<GetMaterialListCommand> {
  constructor(
    @Inject(MATERIAL_REPOSITORY) private materialRepository: MaterialRepository
  ) {}

  async execute(command: GetMaterialListCommand) {
    return this.materialRepository.findAll(command.query);
  }
}
