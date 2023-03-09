import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  WEAPON_REPOSITORY,
  WeaponRepository,
} from '../../domain/repository/WeaponRepository';
import { GetWeaponListCommand } from './GetWeaponList.command';

@CommandHandler(GetWeaponListCommand)
export class GetWeaponListHandler
  implements ICommandHandler<GetWeaponListCommand>
{
  constructor(
    @Inject(WEAPON_REPOSITORY) private weaponRepository: WeaponRepository
  ) {}

  async execute(command: GetWeaponListCommand) {
    return this.weaponRepository.findAll(command.query);
  }
}
