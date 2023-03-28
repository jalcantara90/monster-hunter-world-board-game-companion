import { useCallback, useEffect, useState } from 'react';
import { ICampaignRepository } from './CampaignRepositoryService';

export function useCampaignDetail(
  campaignRepository: ICampaignRepository,
  campaignId?: string
) {
  const [hunterList, setCampaignList] = useState<unknown[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const findAllHunters = useCallback(
    async (id: string) => {
      setIsLoading(true);
      const campaignListResponse = await campaignRepository.findAllHunters(id);
      setCampaignList(campaignListResponse);
      setIsLoading(false);
    },
    [campaignRepository]
  );

  useEffect(() => {
    if (!campaignId) {
      return;
    }

    findAllHunters(campaignId);
  }, [findAllHunters, campaignId]);

  return {
    hunterList,
    isLoading,
  };
}