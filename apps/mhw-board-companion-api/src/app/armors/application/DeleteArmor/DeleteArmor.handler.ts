import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteArmorCommand } from './DeleteArmor.command';
import {
  ARMOR_REPOSITORY,
  ArmorRepository,
} from '../../domain/repository/ArmorRepository';

@CommandHandler(DeleteArmorCommand)
export class DeleteArmorHandler implements ICommandHandler<DeleteArmorCommand> {
  constructor(
    @Inject(ARMOR_REPOSITORY) private armorRepository: ArmorRepository
  ) {}

  async execute(command: DeleteArmorCommand) {
    await this.armorRepository.delete(command.id);
  }
}
