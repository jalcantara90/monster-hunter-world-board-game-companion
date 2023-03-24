import { useCallback, useEffect, useState } from 'react';
import { useBrigadeContext } from '../BrigadeContextProvider';
import { Brigade } from '../domain/Brigade';

export function useBrigadeList() {
  const { brigadeRepository } = useBrigadeContext();
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
