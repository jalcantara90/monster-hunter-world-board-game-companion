import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateHunterCommand } from './CreateHunter.command';
import { HunterRepository, HUNTER_REPOSITORY } from '../../domain/repository/HuntersRepository';

@CommandHandler(CreateHunterCommand)
export class CreateHunterHandler
  implements ICommandHandler<CreateHunterCommand>
{
  constructor(
    @Inject(HUNTER_REPOSITORY) private hunterRepository: HunterRepository
  ) {}

  async execute(command: CreateHunterCommand) {
    return this.hunterRepository.create(command.request);
  }
}
