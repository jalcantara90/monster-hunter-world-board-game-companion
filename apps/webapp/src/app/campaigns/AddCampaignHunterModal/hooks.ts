import { useCallback, useEffect, useState } from 'react';

import { HunterRepositoryService } from '../../hunters/HunterRepositoryService';
import { Hunter } from '../../hunters/types';

const hunterRepository = new HunterRepositoryService();

export function useAddCampaignHunterModal() {
  const [hunterList, setHunterList] = useState<Hunter[]>([]);

  const loadHunters = useCallback(async () => {
    const response = await hunterRepository.findAll();
    setHunterList(response);
  }, []);

  useEffect(() => {
    loadHunters();
  }, [loadHunters]);

  return {
    hunterList,
  };
}
