import { WeaponType } from '../../../weapons/domain/enum/WeaponType';
import { CampaignHuntersResponse } from '../responses/CampaignHuntersResponse';

export interface CampaignHuntersRepository {
  create(
    hunterId: string,
    campaignId: string,
    weaponType: WeaponType
  ): Promise<void>;
  getAllHunters(campaignId: string): Promise<CampaignHuntersResponse[]>;
  getCampaignHunter(
    campaignId: string,
    hunterId: string
  ): Promise<CampaignHuntersResponse>;
}

export const CAMPAIGN_HUNTERS_REPOSITORY = 'CAMPAIGN_HUNTERS_REPOSITORY';
