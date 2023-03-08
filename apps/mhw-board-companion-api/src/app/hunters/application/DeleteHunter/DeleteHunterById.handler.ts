import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteHunterByIdCommand } from './DeleteHunterById.command';
import { HunterRepository, HUNTER_REPOSITORY } from '../../domain/repository/HuntersRepository';

@CommandHandler(DeleteHunterByIdCommand)
export class DeleteHunterByIdHandler
  implements ICommandHandler<DeleteHunterByIdCommand>
{
  constructor(
    @Inject(HUNTER_REPOSITORY) private hunterRepository: HunterRepository
  ) {}

  async execute(command: DeleteHunterByIdCommand) {
    return this.hunterRepository.delete(command.id);
  }
}
