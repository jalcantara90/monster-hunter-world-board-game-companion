import { Injectable } from '@nestjs/common';
import { CampaignEntity } from '../entity/Campaign.entity';
import { CampaignResponse } from '../../domain/responses/CampaignResponse';

@Injectable()
export class CampaignMapper {
  fromEntity(campaign: CampaignEntity): CampaignResponse {
    return new CampaignResponse(campaign.id, campaign.name, campaign.brigadeId);
  }

  fromEntities(campaignList: CampaignEntity[]): CampaignResponse[] {
    return campaignList.map(
      (campaign) =>
        new CampaignResponse(campaign.id, campaign.name, campaign.brigadeId)
    );
  }
}
