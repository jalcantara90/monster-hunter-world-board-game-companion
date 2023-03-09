import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateMonsterCommand } from './CreateMonster.command';
import {
  MonsterRepository,
  MONSTER_REPOSITORY,
} from '../../domain/repository/MonsterRepository';

@CommandHandler(CreateMonsterCommand)
export class CreateMonsterHandler
  implements ICommandHandler<CreateMonsterCommand>
{
  constructor(
    @Inject(MONSTER_REPOSITORY) private monsterRepository: MonsterRepository
  ) {}

  async execute(command: CreateMonsterCommand) {
    return this.monsterRepository.create(command);
  }
}
