import { useCallback, useEffect, useState } from 'react';
import { HunterRepositoryService } from './HunterRepositoryService';
import { Hunter } from './types';

type UseHunterManagementProps = {
  hunterId: string;
};

const hunterRepositoryService = new HunterRepositoryService();

export function useHunterManagement({ hunterId }: UseHunterManagementProps) {
  const [hunter, setHunter] = useState<Hunter>();
  const [isHunterLoading, setIsHunterLoading] = useState(false);

  const loadHunter = useCallback(async (id: string) => {
    setIsHunterLoading(true);
    const response = await hunterRepositoryService.find(id);
    setHunter(response);
    setIsHunterLoading(false);
  }, []);

  useEffect(() => {
    if (!hunterId) {
      return;
    }

    loadHunter(hunterId);
  }, [hunterId, loadHunter]);

  return {
    hunter,
    isHunterLoading
  };
}
