import { useEffect, useState } from 'react';
import { MaterialRepositoryService } from './MaterialRepositoryService';
import { Material } from './types';

const materialRepositoryService = new MaterialRepositoryService();

export function useMaterialList() {
  const [materialList, setMaterialList] = useState<Material[]>([]);

  const loadMaterialList = async () => {
    const response = await materialRepositoryService.findAll();
    setMaterialList(response);
  };

  useEffect(() => {
    loadMaterialList();
  }, []);

  return {
    materialList,
  };
}
