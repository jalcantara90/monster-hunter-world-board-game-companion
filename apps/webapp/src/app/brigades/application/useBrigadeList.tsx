import { useCallback, useEffect, useState } from 'react';
import { Brigade } from '../domain/Brigade';
import { BrigadeRepository } from '../domain/BrigadeRepository';

export function useBrigadeList(brigadeRepository: BrigadeRepository) {
  const [brigadeList, setBrigadeList] = useState<Brigade[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  };
}
