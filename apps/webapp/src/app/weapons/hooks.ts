import { useCallback, useEffect, useState } from 'react';
import { Weapon } from './types';
import { WeaponRepositoryService } from './WeaponRepositoryService';
import { InventoryRepositoryService } from '../inventory/InventoryRepositoryService';
import { useInventoryContext } from '../inventory/InvventoryContext';
import { useParams } from 'react-router-dom';

const weaponRepository = new WeaponRepositoryService();
const inventoyRepository = new InventoryRepositoryService();

export function useWeaponList() {
  const { campaignId, hunterId } = useParams();

  const [weaponList, setWeaponList] = useState<Weapon[]>([]);
  const { inventory, loadInventory } = useInventoryContext();

  const loadWeaponList = useCallback(async () => {
    const response = await weaponRepository.findAll();
    setWeaponList(response);
  }, []);

  const craftWeapon = useCallback((inventoryId: string, weaponId: string) => {
    return inventoyRepository.craftWeapon(inventoryId, weaponId);
  }, []);

  useEffect(() => {
    loadWeaponList();
  }, [loadWeaponList]);

  useEffect(() => {
    if (!inventory.inventoryId && campaignId && hunterId) {
      loadInventory(campaignId, hunterId);
    }
  }, [campaignId, hunterId, inventory, loadInventory]);

  return {
    weaponList,
    craftWeapon,
  };
}
