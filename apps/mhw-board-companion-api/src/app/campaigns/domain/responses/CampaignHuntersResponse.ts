import { HunterResponse } from "../../../hunters/domain/responses/HunterResponse";
import { HunterEntity } from "../../../hunters/infrastructure/entity/Hunter.entity";
import { HunterMapper } from "../../../hunters/infrastructure/repository/HunterMapper";
import { WeaponType } from "../../../weapons/domain/enum/WeaponType";

export class CampaignHuntersResponse {
  public hunter: HunterResponse
  constructor(
    public id: string,
    public weaponType: WeaponType,
    hunter: HunterEntity
  ) {
    const mapper = new HunterMapper();
    this.hunter = mapper.fromEntity(hunter);
  }
}
