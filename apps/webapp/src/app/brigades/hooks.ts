import { useCallback, useEffect, useState } from 'react';
import { Brigade, CreateBrigadeRequest } from './types';
import { IBrigadeRepository } from './BrigadeRepositoryService';

export function useBrigadeList(brigadeRepository: IBrigadeRepository) {
  const [brigadeList, setBrigadeList] = useState<Brigade[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const createBrigade = async (brigade: CreateBrigadeRequest) => {
    try {
      setIsCreating(true);
      const response = await brigadeRepository.create(brigade);
      return response;
    } finally {
      setIsCreating(false);
    }
  };

  const findAllBrigades = useCallback(async () => {
    setIsLoading(true);
    const brigadeListResponse = await brigadeRepository.findAll();
    setBrigadeList(brigadeListResponse);
    setIsLoading(false);
  }, [brigadeRepository]);

  useEffect(() => {
    findAllBrigades();
  }, [findAllBrigades]);

  return {
    brigadeList,
    isLoading,
    createBrigade,
    isCreating,
  };
}
