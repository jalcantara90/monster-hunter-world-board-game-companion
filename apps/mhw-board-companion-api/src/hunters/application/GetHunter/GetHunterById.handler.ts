import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { GetHunterByIdCommand } from './GetHunterById.command';
import { HunterRepository, HUNTER_REPOSITORY } from '../../domain/repository/HuntersRepository';

@CommandHandler(GetHunterByIdCommand)
export class GetHunterByIdHandler
  implements ICommandHandler<GetHunterByIdCommand>
{
  constructor(
    @Inject(HUNTER_REPOSITORY) private hunterRepository: HunterRepository
  ) {}

  async execute(command: GetHunterByIdCommand) {
    return this.hunterRepository.find(command.id);
  }
}
