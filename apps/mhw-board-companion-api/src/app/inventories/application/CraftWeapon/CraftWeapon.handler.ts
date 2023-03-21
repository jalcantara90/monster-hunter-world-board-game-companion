import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  WeaponCraftingRepository,
  WEAPON_CRAFTING_REPOSITORY,
} from '../../../weapons/domain/repository/WeaponCraftingRepository';
import {
  WeaponRepository,
  WEAPON_REPOSITORY,
} from '../../../weapons/domain/repository/WeaponRepository';
import { WeaponResponse } from '../../../weapons/domain/responses/WeaponResponse';

import {
  InventoryRepository,
  INVENTORY_REPOSITORY,
} from '../../domain/repository/InventoryRepository';
import { CraftWeaponCommand } from './CraftWeapon.command';

const WEAPON_ALREADY_CRAFTED = 'This weapon is already crafted';
const PREVIOUS_WEAPON_NOT_CRAFTED =
  'You need to craft the previous weapon';
const NOT_ENOUGH_MATERIALS = 'Not Enought materials';

@CommandHandler(CraftWeaponCommand)
export class CraftWeaponHandler implements ICommandHandler<CraftWeaponCommand> {
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventoryRepository: InventoryRepository,
    @Inject(WEAPON_CRAFTING_REPOSITORY)
    private weaponCraftingRepository: WeaponCraftingRepository,
    @Inject(WEAPON_REPOSITORY) private weaponRepository: WeaponRepository
  ) {}

  async execute(command: CraftWeaponCommand) {
    const { inventoryId, weaponId } = command;

    const inventoryItems = await this.inventoryRepository.findAllMaterials(
      inventoryId
    );

    await this.checkAllCraftingRequirements(weaponId, inventoryItems);

    const inventoryMaterials = inventoryItems.filter(
      (item) => item.material && item.material.id
    );

    const weaponNeededMaterials = await this.weaponCraftingRepository.find(
      weaponId
    );

    const inventoryMaterialListToSave = weaponNeededMaterials.map(
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

    const armorCrafted = await this.inventoryRepository.AddWeapon(inventoryId, {
      weaponId,
    });

    return armorCrafted;
  }

  async checkAllCraftingRequirements(weaponId: string, inventoryItems: any[]) {
    if (inventoryItems.find((item) => item.weapon?.id === weaponId)) {
      throw new HttpException(WEAPON_ALREADY_CRAFTED, HttpStatus.CONFLICT);
    }

    const weapon: WeaponResponse = await this.weaponRepository.find(weaponId);
    const previousWeaponCrafted = inventoryItems
      .filter((item) => Boolean(item.weapon))
      .find(
        (item) =>
          weapon.previousWeapon &&
          item.weapon.id === (weapon.previousWeapon as WeaponResponse).id
      );

    if (weapon.previousWeapon && !previousWeaponCrafted) {
      throw new HttpException(PREVIOUS_WEAPON_NOT_CRAFTED, HttpStatus.CONFLICT);
    }
  }
}
