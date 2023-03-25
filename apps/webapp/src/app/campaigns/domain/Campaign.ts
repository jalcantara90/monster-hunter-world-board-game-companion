export type Campaign = {
  id: string;
  name: string;
  brigadeId: string;
}

export type CreateCampaignRequest = Omit<Campaign, 'id'>;
export type UpdateCampaignRequest = Campaign;
