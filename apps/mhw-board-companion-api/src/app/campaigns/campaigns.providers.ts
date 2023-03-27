import { Provider } from '@nestjs/common';

import { CampaignMapper } from './infrastructure/repository/CampaignMapper';
import { CAMPAIGN_REPOSITORY } from './domain/repository/CampaignRepository';
import { CampaignTypeORMRepository } from './infrastructure/repository/CampaignTypeORMRepository';
import { CAMPAIGN_HUNTERS_REPOSITORY } from './domain/repository/CampaignHuntersRepository';
import { CampaignHuntersTypeORMRepository } from './infrastructure/repository/CampaignHuntersTypeORMRepository';
import { CampaignHuntersMapper } from './infrastructure/repository/CampaignHuntersMapper';

export const campaignProviders: Provider[] = [
  {
    provide: CAMPAIGN_REPOSITORY,
    useClass: CampaignTypeORMRepository,
  },
  {
    provide: CAMPAIGN_HUNTERS_REPOSITORY,
    useClass: CampaignHuntersTypeORMRepository
  },
  CampaignMapper,
  CampaignHuntersMapper
];
