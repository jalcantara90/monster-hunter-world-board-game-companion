import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  MONSTER_REPOSITORY,
  MonsterRepository,
} from '../../domain/repository/MonsterRepository';
import { GetMonsterListCommand } from './GetMonsterList.command';

@CommandHandler(GetMonsterListCommand)
export class GetMonsterListHandler implements ICommandHandler<GetMonsterListCommand> {
  constructor(
    @Inject(MONSTER_REPOSITORY) private monsterRepository: MonsterRepository
  ) {}

  async execute(command: GetMonsterListCommand) {
    return this.monsterRepository.findAll(command.query);
  }
}
