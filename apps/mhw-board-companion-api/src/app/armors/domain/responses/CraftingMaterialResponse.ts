import { MaterialEntity } from '../../../materials/infrastructure/entity/Material.entity';

export class CraftingMaterialResponse {
  public material: Material;

  constructor(
    public armorId: string,
    public quantity: number,
    materialEntity: MaterialEntity
  ) {
    this.material = {
      id: materialEntity.id,
      name: materialEntity.name,
      isCommon: materialEntity.isCommon,
      type: materialEntity.type,
    };
  }
}

export interface Material {
  id: string;
  name: string;
  isCommon: boolean;
  type: number;
}
