import { useCallback, useEffect, useState } from 'react';
import { CampaignRepository } from '../domain/CampaignRepository';

export function useCampaignDetail(
  campaignRepository: CampaignRepository,
  campaignId?: string
) {
  const [hunterList, setCampaignList] = useState<any[]>([]);
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
    isLoading
  };
}
