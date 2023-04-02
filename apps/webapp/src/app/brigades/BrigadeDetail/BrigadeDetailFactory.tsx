import { BrigadeDetail } from './index';
import { BrigadRepositoryService } from '../BrigadeRepositoryService';
import { CampaignRepositoryService } from '../../campaigns/CampaignRepositoryService';

export class BrigadeDetailFactory {
  static create() {
    const brigadeRepository = new BrigadRepositoryService();
    const campaignRepository = new CampaignRepositoryService();

    return (
      <BrigadeDetail
        brigadeRepository={brigadeRepository}
        campaignRepository={campaignRepository}
      />
    );
  }
}
