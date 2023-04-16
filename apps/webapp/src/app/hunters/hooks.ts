import { useCallback, useEffect, useState } from 'react';
import { HunterRepositoryService } from './HunterRepositoryService';
import { Hunter } from './types';
import { InventoryRepositoryService } from '../inventory/InventoryRepositoryService';
import { useInventoryContext } from '../inventory/InvventoryContext';

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
    isHunterLoading,
  };
}

const inventoryRepository = new InventoryRepositoryService();

type UseHunterInventoryProps = { campaignId: string; hunterId: string };

export function useHunterInventory({
  campaignId,
  hunterId,
}: UseHunterInventoryProps) {
  const { loadInventory } = useInventoryContext();

  useEffect(() => {
    loadInventory(campaignId, hunterId);
  }, [campaignId, hunterId, loadInventory]);

  return {
    loadInventory,
  };
}

export function useHunterInventoryItem() {
  const { setInventory } = useInventoryContext();

  const updateInventoryItem = async (
    inventoryItemId: string,
    quantity: number
  ) => {
    await inventoryRepository.updateInventoryItem(inventoryItemId, {
      quantity,
    });

    setInventory((inventory) => ({
      ...inventory,
      commonMaterials: inventory.commonMaterials.map((material) => {
        if (material.id === inventoryItemId) {
          material.quantity = quantity;
        }

        return material;
      }),
      otherMaterials: inventory.otherMaterials.map((material) => {
        if (material.id === inventoryItemId) {
          material.quantity = quantity;
        }

        return material;
      }),
    }));
  };

  const addInventoryItem = (inventoryId: string, materialId: string) => {
    return inventoryRepository.addInventoryMaterial(inventoryId, materialId);
  };
  return {
    updateInventoryItem,
    addInventoryItem,
  };
}
