export type Campaign = {
  id: string;
  name: string;
  brigadeId: string;
};

export type CreateCampaignRequest = Omit<Campaign, 'id'>;
export type UpdateCampaignRequest = Campaign;

export type CampaignHunters = {
  id: string;
  weaponType: number;
  hunter: Hunter;
};

export type Hunter = {
  id: string;
  name: string;
  palicoName: string;
};
