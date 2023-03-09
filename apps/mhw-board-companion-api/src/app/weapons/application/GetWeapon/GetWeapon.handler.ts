import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  WEAPON_REPOSITORY,
  WeaponRepository,
} from '../../domain/repository/WeaponRepository';
import { GetWeaponCommand } from './GetWeapon.command';

@CommandHandler(GetWeaponCommand)
export class GetWeaponHandler implements ICommandHandler<GetWeaponCommand> {
  constructor(
    @Inject(WEAPON_REPOSITORY) private weaponRepository: WeaponRepository
  ) {}

  async execute(command: GetWeaponCommand) {
    return this.weaponRepository.find(command.id);
  }
}
