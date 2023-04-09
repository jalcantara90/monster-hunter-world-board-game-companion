import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  ARMOR_REPOSITORY,
  ArmorRepository,
} from '../../domain/repository/ArmorRepository';
import { GetArmorListCommand } from './GetArmorList.command';
import {
  ARMOR_CRAFTING_REPOSITORY,
  ArmorCraftingRepository,
} from '../../domain/repository/ArmorCraftingRepository';

@CommandHandler(GetArmorListCommand)
export class GetArmorListHandler
  implements ICommandHandler<GetArmorListCommand>
{
  constructor(
    @Inject(ARMOR_REPOSITORY) private armorRepository: ArmorRepository,
    @Inject(ARMOR_CRAFTING_REPOSITORY)
    private armorCraftingRepository: ArmorCraftingRepository
  ) {}

  async execute(command: GetArmorListCommand) {
    const armors = await this.armorRepository.findAll(command.query);
    const armorMaterials = await this.armorCraftingRepository.findAll();

    return armors.map((armor) => {
      const craftingMaterial = armorMaterials
        .filter((armorMaterial) => armorMaterial.armorId === armor.id)
        .map((armorMaterial) => {
          return {
            id: armorMaterial.material.id,
            name: armorMaterial.material.name,
            quantity: armorMaterial.quantity,
          };
        });

      return {
        ...armor,
        materials: craftingMaterial,
      };
    });
  }
}
