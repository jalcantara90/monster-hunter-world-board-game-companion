import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteWeaponCommand } from './DeleteWeapon.command';
import {
  WEAPON_REPOSITORY,
  WeaponRepository,
} from '../../domain/repository/WeaponRepository';

@CommandHandler(DeleteWeaponCommand)
export class DeleteWeaponHandler
  implements ICommandHandler<DeleteWeaponCommand>
{
  constructor(
    @Inject(WEAPON_REPOSITORY) private weaponRepository: WeaponRepository
  ) {}

  async execute(command: DeleteWeaponCommand) {
    await this.weaponRepository.delete(command.id);
  }
}
