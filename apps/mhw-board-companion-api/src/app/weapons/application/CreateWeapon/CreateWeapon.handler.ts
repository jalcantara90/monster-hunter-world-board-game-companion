import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateWeaponCommand } from './CreateWeapon.command';
import {
  WeaponRepository,
  WEAPON_REPOSITORY,
} from '../../domain/repository/WeaponRepository';

@CommandHandler(CreateWeaponCommand)
export class CreateWeaponHandler
  implements ICommandHandler<CreateWeaponCommand>
{
  constructor(
    @Inject(WEAPON_REPOSITORY) private weaponRepository: WeaponRepository
  ) {}

  async execute(command: CreateWeaponCommand) {
    return this.weaponRepository.create(command);
  }
}
