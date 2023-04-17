import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { InventoryHunter } from '../campaigns/types';
import { WeaponType } from '@mhwboard-companion/common-api';
import { CampaignRepositoryService } from '../campaigns/CampaignRepositoryService';

const campaignRepository = new CampaignRepositoryService();

type InventoryContextProps = {
  inventory: InventoryHunter;
  loadInventory: (campaignId: string, hunterId: string) => Promise<void>;
  setInventory: Dispatch<SetStateAction<InventoryHunter>>;
};

const InventoryContext = createContext<InventoryContextProps>({
  inventory: {} as InventoryHunter,
  loadInventory: (_campaignId: string, _hunterId: string) => {
    throw new Error(
      'Ensure that your component is wrapeed with InventoryContextProvider'
    );
  },
  setInventory: () => {
    throw new Error(
      'Ensure that your component is wrapeed with InventoryContextProvider'
    );
  },
});

type InventoryContextProviderProps = {
  children: ReactNode | ReactNode[];
};

export function InventoryContextProvider({
  children,
}: InventoryContextProviderProps) {
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

  return (
    <InventoryContext.Provider
      value={{ inventory, loadInventory, setInventory }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export const useInventoryContext = () => useContext(InventoryContext);
