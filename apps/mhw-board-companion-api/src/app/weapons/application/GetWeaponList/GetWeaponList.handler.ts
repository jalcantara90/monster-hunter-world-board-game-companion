import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  WEAPON_REPOSITORY,
  WeaponRepository,
} from '../../domain/repository/WeaponRepository';
import { GetWeaponListCommand } from './GetWeaponList.command';
import {
  WEAPON_CRAFTING_REPOSITORY,
  WeaponCraftingRepository,
} from '../../domain/repository/WeaponCraftingRepository';

@CommandHandler(GetWeaponListCommand)
export class GetWeaponListHandler
  implements ICommandHandler<GetWeaponListCommand>
{
  constructor(
    @Inject(WEAPON_REPOSITORY) private weaponRepository: WeaponRepository,
    @Inject(WEAPON_CRAFTING_REPOSITORY)
    private weaponCraftingRepository: WeaponCraftingRepository
  ) {}

  async execute(command: GetWeaponListCommand) {
    const weapons = await this.weaponRepository.findAll(command.query);
    const weaponMaterials = await this.weaponCraftingRepository.findAll();

    return weapons.map((weapon) => {
      const craftingMaterial = weaponMaterials.filter(
        (weaponMaterial) => weaponMaterial.weaponId === weapon.id
      ).map((weaponMaterial) => {
        return {
          id: weaponMaterial.material.id,
          name: weaponMaterial.material.name,
          quantity: weaponMaterial.quantity,
        };
      });

      return {
        ...weapon,
        materials: craftingMaterial,
      };
    });
  }
}
