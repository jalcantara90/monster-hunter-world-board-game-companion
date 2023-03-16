import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  ArmorCraftingRepository,
  ARMOR_CRAFTING_REPOSITORY,
} from '../../domain/repository/ArmorCraftingRepository';

import { AddCraftingMaterialsCommand } from './AddCraftingMaterials.command';

@CommandHandler(AddCraftingMaterialsCommand)
export class AddCraftingMaterialHandler
  implements ICommandHandler<AddCraftingMaterialsCommand>
{
  constructor(
    @Inject(ARMOR_CRAFTING_REPOSITORY)
    private armorRepository: ArmorCraftingRepository
  ) {}

  async execute(command: AddCraftingMaterialsCommand) {
    const materialList = await Promise.all(
      command.craftingMaterials.map(({ materialId, quantity }) =>
        this.armorRepository.create(command.armorId, {
          quantity,
          materialId,
        })
      )
    );

    return materialList;
  }
}
