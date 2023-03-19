import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  ArmorCraftingRepository,
  ARMOR_CRAFTING_REPOSITORY,
} from '../../../armors/domain/repository/ArmorCraftingRepository';

import {
  InventoryRepository,
  INVENTORY_REPOSITORY,
} from '../../domain/repository/InventoryRepository';
import { CraftArmorCommand } from './CraftArmor.command';

const ARMOR_ALREADY_CRAFTED = 'This armor is already crafted';
const NOT_ENOUGH_MATERIALS = 'Not Enought materials';

@CommandHandler(CraftArmorCommand)
export class CraftArmorHandler implements ICommandHandler<CraftArmorCommand> {
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventoryRepository: InventoryRepository,
    @Inject(ARMOR_CRAFTING_REPOSITORY)
    private armorCraftingRepository: ArmorCraftingRepository
  ) {}

  async execute(command: CraftArmorCommand) {
    const { inventoryId, armorId } = command;

    const inventoryItems = await this.inventoryRepository.findAllMaterials(
      inventoryId
    );

    if (inventoryItems.find((item) => item.armor?.id === armorId)) {
      throw new HttpException(ARMOR_ALREADY_CRAFTED, HttpStatus.CONFLICT);
    }

    const inventoryMaterials = inventoryItems.filter(
      (item) => item.material && item.material.id
    );

    const armorNeededMaterials = await this.armorCraftingRepository.find(
      armorId
    );

    const inventoryMaterialListToSave = armorNeededMaterials.map(
      ({ material, quantity }) => {
        const inventoryMaterial = inventoryMaterials.find(
          (inventory) => inventory.material.id === material.id
        );
        if (!inventoryMaterial || inventoryMaterial.quantity < quantity) {
          throw new HttpException(NOT_ENOUGH_MATERIALS, HttpStatus.CONFLICT);
        }

        inventoryMaterial.quantity -= quantity;

        return inventoryMaterial;
      }
    );

    await Promise.all(
      inventoryMaterialListToSave.map((material) =>
        this.inventoryRepository.updateInventoryItem(material.id, material)
      )
    );

    const armorCrafted = await this.inventoryRepository.AddArmor(inventoryId, {
      armorId,
    });

    return armorCrafted;
  }
}
