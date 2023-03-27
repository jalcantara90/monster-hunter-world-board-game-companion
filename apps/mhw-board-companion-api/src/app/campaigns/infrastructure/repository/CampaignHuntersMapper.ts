import { Injectable } from '@nestjs/common';
import { CampaignHuntersEntity } from '../entity/Campaign.entity';
import { CampaignHuntersResponse } from '../../domain/responses/CampaignHuntersResponse';
import { HunterEntity } from '../../../hunters/infrastructure/entity/Hunter.entity';

@Injectable()
export class CampaignHuntersMapper {
  fromEntity(campaignHunter: CampaignHuntersEntity): CampaignHuntersResponse {
    return new CampaignHuntersResponse(
      campaignHunter.id,
      campaignHunter.weaponType,
      campaignHunter.hunter as HunterEntity
    );
  }

  fromEntities(
    campaignList: CampaignHuntersEntity[]
  ): CampaignHuntersResponse[] {
    return campaignList.map((campaign) => this.fromEntity(campaign));
  }
}
