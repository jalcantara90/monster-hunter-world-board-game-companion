import { useCallback, useEffect, useState } from 'react';
import { HunterRepositoryService } from './HunterRepositoryService';
import { Hunter } from './types';
import { InventoryRepositoryService } from '../inventory/InventoryRepositoryService';
import { useInventoryContext } from '../inventory/InvventoryContext';
import { CampaignRepositoryService } from '../campaigns/CampaignRepositoryService';
import { useListener } from '../core/SocketContext';
import { Campaign } from '../campaigns/types';

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

const POTIONS_UPDATED = 'POTIONS_UPDATED';
const campaignRepository = new CampaignRepositoryService();

export function usePotionsManager({ campaignId }: { campaignId: string }) {
  const [potions, setPotions] = useState<number>();

  const getCampaign = useCallback(async (campaignId: string) => {
    const response = await campaignRepository.find(campaignId);
    setPotions(response.potions);
  }, []);

  const updatePotion = useCallback(
    (campaign: Campaign) => {
      if (campaignId !== campaign.id) {
        return;
      }

      setPotions(campaign.potions);
    },
    [campaignId]
  );

  useListener(POTIONS_UPDATED, updatePotion);

  useEffect(() => {
    if (!campaignId) {
      return;
    }

    getCampaign(campaignId);
  }, [campaignId, getCampaign]);

  return {
    potions,
  };
}
