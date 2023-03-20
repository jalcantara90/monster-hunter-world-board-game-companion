import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  WeaponCraftingRepository,
  WEAPON_CRAFTING_REPOSITORY,
} from '../../domain/repository/WeaponCraftingRepository';
import { GetWeaponCraftingMaterialsCommand } from './GetCraftingMaterials.command';

@CommandHandler(GetWeaponCraftingMaterialsCommand)
export class GetWeaponCraftingMaterialArmorHandler
  implements ICommandHandler<GetWeaponCraftingMaterialsCommand>
{
  constructor(
    @Inject(WEAPON_CRAFTING_REPOSITORY)
    private weaponCraftingRepository: WeaponCraftingRepository
  ) {}

  async execute(command: GetWeaponCraftingMaterialsCommand) {
    return this.weaponCraftingRepository.find(command.armorId);
  }
}
