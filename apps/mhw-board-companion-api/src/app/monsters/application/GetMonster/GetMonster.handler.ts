import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  MONSTER_REPOSITORY,
  MonsterRepository,
} from '../../domain/repository/MonsterRepository';
import { GetMonsterCommand } from './GetMonster.command';

@CommandHandler(GetMonsterCommand)
export class GetMonsterHandler implements ICommandHandler<GetMonsterCommand> {
  constructor(
    @Inject(MONSTER_REPOSITORY) private monsterRepository: MonsterRepository
  ) {}

  async execute(command: GetMonsterCommand) {
    return this.monsterRepository.find(command.id);
  }
}
