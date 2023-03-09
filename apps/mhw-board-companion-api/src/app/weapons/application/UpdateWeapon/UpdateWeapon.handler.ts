import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UpdateWeaponCommand } from './UpdateWeapon.command';
import {
  WEAPON_REPOSITORY,
  WeaponRepository,
} from '../../domain/repository/WeaponRepository';

@CommandHandler(UpdateWeaponCommand)
export class UpdateWeaponHandler
  implements ICommandHandler<UpdateWeaponCommand>
{
  constructor(
    @Inject(WEAPON_REPOSITORY) private weaponRepository: WeaponRepository
  ) {}

  async execute(command: UpdateWeaponCommand) {
    const { id, ...weapon } = command;
    return this.weaponRepository.update(id, weapon);
  }
}
