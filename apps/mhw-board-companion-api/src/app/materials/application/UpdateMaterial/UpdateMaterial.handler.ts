import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UpdateMaterialCommand } from './UpdateMaterial.command';
import {
  MATERIAL_REPOSITORY,
  MaterialRepository,
} from '../../domain/repository/MaterialRepository';

@CommandHandler(UpdateMaterialCommand)
export class UpdateMaterialHandler
  implements ICommandHandler<UpdateMaterialCommand>
{
  constructor(
    @Inject(MATERIAL_REPOSITORY) private materialRepository: MaterialRepository
  ) {}

  async execute(command: UpdateMaterialCommand) {
    return this.materialRepository.update(command.id, { name: command.name });
  }
}
