import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  BRIGADE_REPOSITORY,
  BrigadeRepository,
} from '../../domain/repository/BrigadeRepository';
import { GetBrigadeByIdCommand } from './GetBrigadeById.command';

@CommandHandler(GetBrigadeByIdCommand)
export class GetBrigadeByIdHandler
  implements ICommandHandler<GetBrigadeByIdCommand>
{
  constructor(
    @Inject(BRIGADE_REPOSITORY) private brigadeRepository: BrigadeRepository
  ) {}

  async execute(command: GetBrigadeByIdCommand) {
    return this.brigadeRepository.find(command.id);
  }
}
