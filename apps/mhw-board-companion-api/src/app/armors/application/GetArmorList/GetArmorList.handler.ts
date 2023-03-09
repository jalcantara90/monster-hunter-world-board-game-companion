import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  ARMOR_REPOSITORY,
  ArmorRepository,
} from '../../domain/repository/ArmorRepository';
import { GetArmorListCommand } from './GetArmorList.command';

@CommandHandler(GetArmorListCommand)
export class GetArmorListHandler implements ICommandHandler<GetArmorListCommand> {
  constructor(
    @Inject(ARMOR_REPOSITORY) private armorRepository: ArmorRepository
  ) {}

  async execute(command: GetArmorListCommand) {
    return this.armorRepository.findAll(command.query);
  }
}
