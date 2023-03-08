import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UpdateHunterCommand } from './UpdateHunter.command';
import { HunterRepository, HUNTER_REPOSITORY } from '../../domain/repository/HuntersRepository';

@CommandHandler(UpdateHunterCommand)
export class UpdateHunterHandler
  implements ICommandHandler<UpdateHunterCommand>
{
  constructor(
    @Inject(HUNTER_REPOSITORY) private hunterRepository: HunterRepository
  ) {}

  execute(command: UpdateHunterCommand) {
    const { id, ...hunter } = command;

    return this.hunterRepository.update(id, hunter);
  }
}
