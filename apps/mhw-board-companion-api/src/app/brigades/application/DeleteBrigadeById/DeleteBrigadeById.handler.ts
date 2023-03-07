
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteBrigadeByIdCommand } from './DeleteBrigadeById.command';
import { BRIGADE_REPOSITORY, BrigadeRepository } from '../../domain/repository/BrigadeRepository';

@CommandHandler(DeleteBrigadeByIdCommand)
export class DeleteBrigadeByIdHandler
  implements ICommandHandler<DeleteBrigadeByIdCommand>
{
  constructor(
    @Inject(BRIGADE_REPOSITORY) private brigadeRepository: BrigadeRepository
  ) {}

  async execute(command: DeleteBrigadeByIdCommand) {
    await this.brigadeRepository.delete(command.id);
  }
}
