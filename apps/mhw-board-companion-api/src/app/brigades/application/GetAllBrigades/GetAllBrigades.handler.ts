import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  BRIGADE_REPOSITORY,
  BrigadeRepository,
} from '../../domain/repository/BrigadeRepository';
import { GetAllBrigadesCommad } from './GetAllBrigades.commnad';

@CommandHandler(GetAllBrigadesCommad)
export class GetAllBrigadesHandler
  implements ICommandHandler<GetAllBrigadesCommad>
{
  constructor(
    @Inject(BRIGADE_REPOSITORY) private brigadeRepository: BrigadeRepository
  ) {}

  async execute() {
    return this.brigadeRepository.findAll();
  }
}
