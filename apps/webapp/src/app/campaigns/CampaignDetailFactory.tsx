import { CampaignDetail } from './CampaignDetail';
import { CampaignRepositoryService } from './CampaignRepositoryService';

export class CampaignDetailFactory {
  static create() {
    const repository = new CampaignRepositoryService();

    return <CampaignDetail campaignRepository={repository} />;
  }
}
