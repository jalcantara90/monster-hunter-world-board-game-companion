import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UpdateBrigadeByIdCommand } from './UpdateBrigadeById.command';
import { BRIGADE_REPOSITORY, BrigadeRepository } from '../../domain/repository/BrigadeRepository';

@CommandHandler(UpdateBrigadeByIdCommand)
export class UpdateBrigadeByIdHandler
  implements ICommandHandler<UpdateBrigadeByIdCommand>
{
  constructor(
    @Inject(BRIGADE_REPOSITORY) private brigadeRepository: BrigadeRepository
  ) {}

  async execute(command: UpdateBrigadeByIdCommand) {
    return this.brigadeRepository.update(command.id, { name: command.name });
  }
}
