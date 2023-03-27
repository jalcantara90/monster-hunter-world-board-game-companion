import { CreateCampaignRequest } from '../requests/CreateCampaignRequest';
import { UpdateCampaignRequest } from '../requests/UpdateCampaignRequest';
import { CampaignResponse } from '../responses/CampaignResponse';

export interface CampaignRepository {
  find(id: string): Promise<CampaignResponse>;
  create(campaign: CreateCampaignRequest): Promise<CampaignResponse>;
  update(
    id: string,
    campaign: UpdateCampaignRequest
  ): Promise<CampaignResponse>;
  delete(id: string): Promise<void>;
  findAllByBrigadeId(brigadeId: string): Promise<CampaignResponse[]>;
}

export const CAMPAIGN_REPOSITORY = 'CAMPAIGN_REPOSITORY';
