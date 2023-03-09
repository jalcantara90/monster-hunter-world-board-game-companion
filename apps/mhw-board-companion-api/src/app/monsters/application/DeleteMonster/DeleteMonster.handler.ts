import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteMonsterCommand } from './DeleteMonster.command';
import {
  MONSTER_REPOSITORY,
  MonsterRepository,
} from '../../domain/repository/MonsterRepository';

@CommandHandler(DeleteMonsterCommand)
export class DeleteMonsterHandler
  implements ICommandHandler<DeleteMonsterCommand>
{
  constructor(
    @Inject(MONSTER_REPOSITORY) private monsterRepository: MonsterRepository
  ) {}

  async execute(command: DeleteMonsterCommand) {
    await this.monsterRepository.delete(command.id);
  }
}
