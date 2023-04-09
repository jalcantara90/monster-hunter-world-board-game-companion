import { useCallback, useEffect, useState } from 'react';
import { Armor } from './types';
import { ArmorRepositoryService } from './ArmorRepositoryService';
import { InventoryRepositoryService } from '../inventory/InventoryRepositoryService';
import { useInventoryContext } from '../inventory/InvventoryContext';
import { useParams } from 'react-router-dom';

const armorRepository = new ArmorRepositoryService();
const inventoyRepository = new InventoryRepositoryService();

export function useArmorList() {
  const { campaignId, hunterId } = useParams();

  const [armorList, setArmorList] = useState<Armor[]>([]);
  const { inventory, loadInventory } = useInventoryContext();

  const loadArmorList = useCallback(async () => {
    const response = await armorRepository.findAll();
    setArmorList(response);
  }, []);

  const craftArmor = useCallback((inventoryId: string, armorId: string) => {
    return inventoyRepository.craftArmor(inventoryId, armorId);
  }, []);

  useEffect(() => {
    loadArmorList();
  }, [loadArmorList]);

  useEffect(() => {
    if (!inventory.inventoryId && campaignId && hunterId) {
      loadInventory(campaignId, hunterId);
    }
  }, [campaignId, hunterId, inventory, loadInventory]);

  return {
    armorList,
    craftArmor,
  };
}
