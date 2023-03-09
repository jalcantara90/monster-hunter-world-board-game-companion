import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UpdateArmorCommand } from './UpdateArmor.command';
import {
  ARMOR_REPOSITORY,
  ArmorRepository,
} from '../../domain/repository/ArmorRepository';

@CommandHandler(UpdateArmorCommand)
export class UpdateArmorHandler implements ICommandHandler<UpdateArmorCommand> {
  constructor(
    @Inject(ARMOR_REPOSITORY) private armorRepository: ArmorRepository
  ) {}

  async execute(command: UpdateArmorCommand) {
    const { id, ...armor } = command;
    return this.armorRepository.update(id, armor);
  }
}
