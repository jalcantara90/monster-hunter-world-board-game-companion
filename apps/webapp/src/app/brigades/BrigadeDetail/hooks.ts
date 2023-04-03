import { useCallback, useEffect, useState } from 'react';

import { IBrigadeRepository } from '../BrigadeRepositoryService';
import { Campaign, CreateCampaignRequest } from '../../campaigns/types';
import { ICampaignRepository } from '../../campaigns/CampaignRepositoryService';

export function useBrigadeDetails(
  brigadeRepository: IBrigadeRepository,
  brigadeId?: string
) {
  const [campaignList, setCampaignList] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const findAllCampaigns = useCallback(
    async (id: string) => {
      setIsLoading(true);
      const campaignListResponse = await brigadeRepository.findAllCampaigns(id);
      setCampaignList(campaignListResponse);
      setIsLoading(false);
    },
    [brigadeRepository]
  );

  useEffect(() => {
    if (!brigadeId) {
      return;
    }

    findAllCampaigns(brigadeId);
  }, [findAllCampaigns, brigadeId]);

  return {
    campaignList,
    isLoading,
  };
}

export function useCampaignCreate(campaignRepository: ICampaignRepository) {
  const createCampaign = (request: CreateCampaignRequest) => {
    return campaignRepository.create(request);
  };

  return {
    createCampaign
  };
}
