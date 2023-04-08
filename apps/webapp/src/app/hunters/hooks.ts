import { useCallback, useEffect, useState } from 'react';
import { HunterRepositoryService } from './HunterRepositoryService';
import { Hunter } from './types';
import { InventoryHunter } from '../campaigns/types';
import { WeaponType } from '@mhwboard-companion/common-api';
import { CampaignRepositoryService } from '../campaigns/CampaignRepositoryService';
import { InventoryRepositoryService } from '../inventory/InventoryRepositoryService';

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

const campaignRepository = new CampaignRepositoryService();
const inventoryRepository = new InventoryRepositoryService();

type UseHunterInventoryProps = { campaignId: string; hunterId: string };

export function useHunterInventory({
  campaignId,
  hunterId,
}: UseHunterInventoryProps) {
  const [inventory, setInventory] = useState<InventoryHunter>({
    inventoryId: '',
    weaponType: WeaponType.GREAT_SWORD,
    armors: [],
    commonMaterials: [],
    otherMaterials: [],
    weapons: [],
  });

  const loadInventory = useCallback(
    async (campaignId: string, hunterId: string) => {
      const response = await campaignRepository.findHunterInventory(
        campaignId,
        hunterId
      );
      setInventory(response);
    },
    []
  );

  useEffect(() => {
    loadInventory(campaignId, hunterId);
  }, [campaignId, hunterId, loadInventory]);

  return {
    inventory,
    loadInventory,
  };
}

export function useHunterInventoryItem() {
  const updateInventoryItem = async (inventoryItemId: string, quantity: number) => {
    return await inventoryRepository.updateInventoryItem(inventoryItemId, {
      quantity,
    });
  };

  const addInventoryItem = (inventoryId: string, materialId: string) => {
    return inventoryRepository.addInventoryMaterial(inventoryId, materialId);
  };
  return {
    updateInventoryItem,
    addInventoryItem,
  };
}
