import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateMaterialCommand } from './CreateMaterial.command';
import {
  MaterialRepository,
  MATERIAL_REPOSITORY,
} from '../../domain/repository/MaterialRepository';

@CommandHandler(CreateMaterialCommand)
export class CreateMaterialHandler
  implements ICommandHandler<CreateMaterialCommand>
{
  constructor(
    @Inject(MATERIAL_REPOSITORY) private materialRepository: MaterialRepository
  ) {}

  async execute(command: CreateMaterialCommand) {
    return this.materialRepository.create(command.request);
  }
}
