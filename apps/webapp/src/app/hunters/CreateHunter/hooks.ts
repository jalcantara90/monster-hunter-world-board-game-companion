import { useCallback } from 'react';
import { HunterRepositoryService } from '../HunterRepositoryService';
import { CreateHunterRequest } from '../types';

export function useCreateHunter() {
  const createHunter = useCallback(async (request: CreateHunterRequest) => {
    const hunterRepository = new HunterRepositoryService();
    const hunter = await hunterRepository.create(request);

    return hunter;
  }, []);

  return {
    createHunter,
  };
}
