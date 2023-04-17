import { useCallback } from 'react';
import { RequiredMaterial } from '../atoms/RequiredMaterials';

export enum HasEnoughMaterials {
  HAS_ZERO = 'has-zero',
  HAS_ENOUGH = 'has-enough',
  NOT_HAS_ENOUGH = 'not-has-enough',
}

export function useCheckRequirements() {
  return useCallback(
    (
      craftMaterial: RequiredMaterial,
      inventoryMaterials: RequiredMaterial[]
    ) => {
      const material = inventoryMaterials.find(
        (material) => craftMaterial.name === material.name
      );

      if (!inventoryMaterials.length || !material) {
        return {
          check: HasEnoughMaterials.HAS_ZERO,
          quantityLeft: craftMaterial.quantity,
        };
      }

      return material.quantity >= craftMaterial.quantity
        ? { check: HasEnoughMaterials.HAS_ENOUGH, quantityLeft: 0 }
        : {
            check: HasEnoughMaterials.NOT_HAS_ENOUGH,
            quantityLeft: craftMaterial.quantity - material.quantity,
          };
    },
    []
  );
}
