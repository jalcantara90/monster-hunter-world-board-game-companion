import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateBrigadeCommand } from './CreateBrigade.command';
import { BrigadeRepository, BRIGADE_REPOSITORY } from '../../domain/repository/BrigadeRepository';

@CommandHandler(CreateBrigadeCommand)
export class CreateBrigadeHandler
  implements ICommandHandler<CreateBrigadeCommand>
{
  constructor(
    @Inject(BRIGADE_REPOSITORY) private brigadeRepository: BrigadeRepository
  ) {}

  async execute(command: CreateBrigadeCommand) {
    return this.brigadeRepository.create(command);
  }
}
