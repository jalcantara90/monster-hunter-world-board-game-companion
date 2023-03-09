import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  ARMOR_REPOSITORY,
  ArmorRepository,
} from '../../domain/repository/ArmorRepository';
import { GetArmorCommand } from './GetArmor.command';

@CommandHandler(GetArmorCommand)
export class GetArmorHandler implements ICommandHandler<GetArmorCommand> {
  constructor(
    @Inject(ARMOR_REPOSITORY) private armorRepository: ArmorRepository
  ) {}

  async execute(command: GetArmorCommand) {
    return this.armorRepository.find(command.id);
  }
}
