import {
  Campaign,
  CreateCampaignRequest,
  UpdateCampaignRequest,
} from './Campaign';

export interface CampaignRepository {
  findAll(): Promise<Campaign[]>;
  find(campaignId: string): Promise<Campaign[]>;
  create(request: CreateCampaignRequest): Promise<Campaign>;
  update(request: UpdateCampaignRequest): Promise<Campaign>;
  delete(campaignId: string): Promise<void>;
}
