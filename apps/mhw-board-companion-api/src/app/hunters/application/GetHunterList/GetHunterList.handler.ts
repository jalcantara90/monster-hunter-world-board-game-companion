import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import {
  HunterRepository,
  HUNTER_REPOSITORY,
} from '../../domain/repository/HuntersRepository';
import { GetHunterListCommand } from './GetHunterList.command';

@CommandHandler(GetHunterListCommand)
export class GetHunterListHandler
  implements ICommandHandler<GetHunterListCommand>
{
  constructor(
    @Inject(HUNTER_REPOSITORY) private hunterRepository: HunterRepository
  ) {}

  async execute() {
    return this.hunterRepository.findAll({});
  }
}
