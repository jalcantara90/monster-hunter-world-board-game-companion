import { Injectable } from '@nestjs/common';
import { MaterialEntity } from '../entity/Material.entity';
import { MaterialResponse } from '../../domain/responses/MaterialResponse';

@Injectable()
export class MaterialMapper {
  fromEntity(material: MaterialEntity): MaterialResponse {
    return new MaterialResponse(
      material.id,
      material.name,
      material.isCommon,
      material.rarity,
      material.type
    );
  }

  fromEntities(materialList: MaterialEntity[]): MaterialResponse[] {
    return materialList.map(
      (material) =>
        new MaterialResponse(
          material.id,
          material.name,
          material.isCommon,
          material.rarity,
          material.type
        )
    );
  }
}
