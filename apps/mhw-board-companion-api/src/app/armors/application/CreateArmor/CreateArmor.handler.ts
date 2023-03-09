import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateArmorCommand } from './CreateArmor.command';
import {
  ArmorRepository,
  ARMOR_REPOSITORY,
} from '../../domain/repository/ArmorRepository';

@CommandHandler(CreateArmorCommand)
export class CreateArmorHandler implements ICommandHandler<CreateArmorCommand> {
  constructor(
    @Inject(ARMOR_REPOSITORY) private armorRepository: ArmorRepository
  ) {}

  async execute(command: CreateArmorCommand) {
    return this.armorRepository.create(command);
  }
}
