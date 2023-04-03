import { useCallback, useEffect, useState } from 'react';
import { ICampaignRepository } from './CampaignRepositoryService';
import { AddHunterCampaignRequest, Campaign, CampaignHunters } from './types';

export function useCampaignDetail(
  campaignRepository: ICampaignRepository,
  campaignId?: string
) {
  const [campaign, setCampaign] = useState<Campaign>();
  const [hunterList, setHunterList] = useState<CampaignHunters[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const findAllHunters = useCallback(
    async (id: string) => {
      setIsLoading(true);
      const campaignListResponse = await campaignRepository.findAllHunters(id);
      setHunterList(campaignListResponse);
      setIsLoading(false);
    },
    [campaignRepository]
  );

  const getCampaign = useCallback(
    async (campaignId: string) => {
      const response = await campaignRepository.find(campaignId);
      setCampaign(response);
    },
    [campaignRepository]
  );

  const addCampaignHunters = (request: AddHunterCampaignRequest) => {
    return campaignRepository.AddHunters(request);
  };

  useEffect(() => {
    if (!campaignId) {
      return;
    }

    getCampaign(campaignId);
  }, [getCampaign, campaignId]);

  useEffect(() => {
    if (!campaignId) {
      return;
    }

    findAllHunters(campaignId);
  }, [findAllHunters, campaignId]);

  return {
    hunterList,
    isLoading,
    campaign,
    addCampaignHunters,
    findAllHunters
  };
}
