import { useCallback, useEffect, useState } from 'react';
import { Campaign } from '../../campaigns/domain/Campaign';
import { useBrigadeContext } from '../BrigadeContextProvider';

export function useBrigadeDetails(brigadeId?: string) {
  const { brigadeRepository } = useBrigadeContext();
  const [campaignList, setCampaignList] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const findAllCampaigns = useCallback(async (id: string) => {
    setIsLoading(true);
    const campaignListResponse = await brigadeRepository.findAllCampaigns(
      id
    );
    setCampaignList(campaignListResponse);
    setIsLoading(false);
  }, [brigadeRepository]);

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
