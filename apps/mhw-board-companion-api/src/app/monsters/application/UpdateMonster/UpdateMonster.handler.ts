import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UpdateMonsterCommand } from './UpdateMonster.command';
import {
  MONSTER_REPOSITORY,
  MonsterRepository,
} from '../../domain/repository/MonsterRepository';

@CommandHandler(UpdateMonsterCommand)
export class UpdateMonsterHandler
  implements ICommandHandler<UpdateMonsterCommand>
{
  constructor(
    @Inject(MONSTER_REPOSITORY) private monsterRepository: MonsterRepository
  ) {}

  async execute(command: UpdateMonsterCommand) {
    const { id, ...request } = command;
    return this.monsterRepository.update(id, request);
  }
}
