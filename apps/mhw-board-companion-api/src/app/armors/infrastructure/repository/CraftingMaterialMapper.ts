import { Injectable } from '@nestjs/common';
import { MaterialEntity } from '../../../materials/infrastructure/entity/Material.entity';
import { CraftingMaterialResponse } from '../../domain/responses/CraftingMaterialResponse';

import { ArmorCraftingEntity } from '../entity/Armor.entity';

@Injectable()
export class ArmorCraftingMaterialMapper {
  fromEntity(armorCraftingMaterial: ArmorCraftingEntity): CraftingMaterialResponse {
    return new CraftingMaterialResponse(
      armorCraftingMaterial.armorId,
      armorCraftingMaterial.quantity,
      armorCraftingMaterial.materialId as unknown as MaterialEntity,
    );
  }

  fromEntities(armorList: ArmorCraftingEntity[]): CraftingMaterialResponse[] {
    return armorList.map((armor) => this.fromEntity(armor));
  }
}
