import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  MATERIAL_REPOSITORY,
  MaterialRepository,
} from '../../domain/repository/MaterialRepository';
import { GetMaterialCommand } from './GetMaterial.command';

@CommandHandler(GetMaterialCommand)
export class GetMaterialHandler implements ICommandHandler<GetMaterialCommand> {
  constructor(
    @Inject(MATERIAL_REPOSITORY) private materialRepository: MaterialRepository
  ) {}

  async execute(command: GetMaterialCommand) {
    return this.materialRepository.find(command.id);
  }
}
