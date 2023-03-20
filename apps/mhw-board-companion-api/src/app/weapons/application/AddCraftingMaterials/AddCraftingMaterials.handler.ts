import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { WeaponCraftingRepository, WEAPON_CRAFTING_REPOSITORY } from '../../domain/repository/WeaponCraftingRepository';
import { AddWeaponCraftingMaterialsCommand } from './AddCraftingMaterials.command';

@CommandHandler(AddWeaponCraftingMaterialsCommand)
export class AddWeaponCraftingMaterialHandler
  implements ICommandHandler<AddWeaponCraftingMaterialsCommand>
{
  constructor(
    @Inject(WEAPON_CRAFTING_REPOSITORY)
    private weaponRepository: WeaponCraftingRepository
  ) {}

  async execute(command: AddWeaponCraftingMaterialsCommand) {
    const materialList = await Promise.all(
      command.craftingMaterials.map(({ materialId, quantity }) =>
        this.weaponRepository.create(command.weaponId, {
          quantity,
          materialId,
        })
      )
    );

    return materialList;
  }
}
