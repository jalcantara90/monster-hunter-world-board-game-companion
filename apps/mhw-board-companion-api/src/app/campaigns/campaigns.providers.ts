import { Provider } from '@nestjs/common';

import { CampaignMapper } from './infrastructure/repository/CampaignMapper';
import { CAMPAIGN_REPOSITORY } from './domain/repository/CampaignRepository';
import { CampaignTypeORMRepository } from './infrastructure/repository/CampaignTypeORMRepository';

export const campaignProviders: Provider[] = [
  {
    provide: CAMPAIGN_REPOSITORY,
    useClass: CampaignTypeORMRepository,
  },
  CampaignMapper,
];
