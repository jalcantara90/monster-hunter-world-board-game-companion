import { WeaponType } from '@mhwboard-companion/common-api';

export type Campaign = {
  id: string;
  name: string;
  brigadeId: string;
};

export type CreateCampaignRequest = Omit<Campaign, 'id'>;
export type UpdateCampaignRequest = Campaign;

export type CampaignHunters = {
  id: string;
  weaponType: WeaponType;
  hunter: Hunter;
};

export type Hunter = {
  id: string;
  name: string;
  palicoName: string;
};

export type HunterCampaignRequest = {
  hunterId: string;
  weaponType: WeaponType;
};

export type AddHunterCampaignRequest = {
  campaignId: string;
  huntersCampaign: HunterCampaignRequest[];
};
