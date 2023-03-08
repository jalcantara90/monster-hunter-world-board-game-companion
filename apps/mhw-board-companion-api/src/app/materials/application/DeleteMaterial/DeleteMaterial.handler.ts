import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteMaterialCommand } from './DeleteMaterial.command';
import {
  MATERIAL_REPOSITORY,
  MaterialRepository,
} from '../../domain/repository/MaterialRepository';

@CommandHandler(DeleteMaterialCommand)
export class DeleteMaterialHandler
  implements ICommandHandler<DeleteMaterialCommand>
{
  constructor(
    @Inject(MATERIAL_REPOSITORY) private materialRepository: MaterialRepository
  ) {}

  async execute(command: DeleteMaterialCommand) {
    await this.materialRepository.delete(command.id);
  }
}
