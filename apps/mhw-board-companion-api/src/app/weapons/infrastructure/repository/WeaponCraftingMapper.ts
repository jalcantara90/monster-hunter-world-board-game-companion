import { Injectable } from '@nestjs/common';
import { MaterialEntity } from '../../../materials/infrastructure/entity/Material.entity';
import { WeaponCraftingMaterialResponse } from '../../domain/responses/WeaponCraftingMaterialResponse';
import { WeaponCraftingEntity } from '../entity/Weapon.entity';

@Injectable()
export class WeaponCraftingMaterialMapper {
  fromEntity(armorCraftingMaterial: WeaponCraftingEntity): WeaponCraftingMaterialResponse {
    return new WeaponCraftingMaterialResponse(
      armorCraftingMaterial.weaponId,
      armorCraftingMaterial.quantity,
      armorCraftingMaterial.materialId as unknown as MaterialEntity,
    );
  }

  fromEntities(armorList: WeaponCraftingEntity[]): WeaponCraftingMaterialResponse[] {
    return armorList.map((armor) => this.fromEntity(armor));
  }
}
