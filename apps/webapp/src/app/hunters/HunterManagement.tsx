import { useParams } from 'react-router-dom';
import {
  useHunterManagement,
  useHunterInventory,
  useHunterInventoryItem,
} from './hooks';
import {
  SectionTitle,
  InventoryItem,
  ListContainer,
  ArmorPieceCard,
  WeaponCard,
  Button,
  useModal,
  useToast,
} from '@mhwboard-companion/design-system';
import { InventoryMaterial } from '../campaigns/types';

import styles from './HunterManagement.module.scss';
import {
  InventoryItemForm,
  InventoryItemModal,
} from '../inventory/InventoryItemModal';

export function HunterManagement() {
  const { campaignId, hunterId } = useParams();

  const { hunter } = useHunterManagement({
    hunterId: hunterId as string,
  });

  const { inventory, loadInventory } = useHunterInventory({
    campaignId: campaignId as string,
    hunterId: hunterId as string,
  });

  if (!hunter?.name) {
    return <div>Loading...</div>;
  }

  const updateInventory = async () => {
    await loadInventory(campaignId as string, hunterId as string);
  };

  return (
    <section className={styles.hunterManagement}>
      <SectionTitle title={hunter?.name} />
      <InventoryItemList
        inventoryId={inventory.inventoryId}
        title="Common Materials"
        materialList={inventory.commonMaterials}
        updateInventory={updateInventory}
      />
      <InventoryItemList
        inventoryId={inventory.inventoryId}
        title="Other Materials"
        materialList={inventory.otherMaterials}
        updateInventory={updateInventory}
      />
      <h4>Armor pieces</h4>
      {inventory.armors.map((armor) => {
        return (
          <ArmorPieceCard
            key={armor.id}
            id={armor.id}
            name={armor.name}
            defense={armor.defense}
            elementalDefense={armor.elementalDefense}
            elementalDefenseType={armor.elementalDefenseType}
            armorPiece={armor.armorPiece}
          />
        );
      })}
      <h4>Weapons</h4>
      {inventory.weapons.map((weapon) => {
        return (
          <WeaponCard
            key={weapon.id}
            id={weapon.id}
            name={weapon.name}
            damageOne={weapon.damageOne}
            damageTwo={weapon.damageTwo}
            damageThree={weapon.damageThree}
            damageFour={weapon.damageFour}
            damageFive={weapon.damageFive}
            weaponType={weapon.weaponType}
          />
        );
      })}
    </section>
  );
}

const InventoryItemList = ({
  materialList,
  title,
  inventoryId,
  updateInventory,
}: {
  materialList: InventoryMaterial[];
  title: string;
  inventoryId: string;
  updateInventory: () => void;
}) => {
  const { updateInventoryItem, addInventoryItem } = useHunterInventoryItem();
  const { showModal } = useModal();
  const notify = useToast();
  const showMaterialModalForm = async () => {
    const { result, isCancelled } = await showModal<InventoryItemForm>(
      <InventoryItemModal />
    );

    if (isCancelled) {
      return;
    }

    try {
      await notify.promise(addInventoryItem(inventoryId, result.materialId), {
        success: 'Material added',
        error: "Couldn't add material",
        pending: 'Adding material',
      });

      setTimeout(() => updateInventory(), 500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ListContainer>
      <div className={styles.titleContainer}>
        <h4>{title}</h4>
        <Button onClick={showMaterialModalForm}> Add Material </Button>
      </div>
      {materialList.map((material) => {
        return (
          <InventoryItem
            key={material.id}
            id={material.id}
            name={material.name}
            quantity={material.quantity}
            update={(id, quantity) => updateInventoryItem(id, quantity)}
          />
        );
      })}
    </ListContainer>
  );
};
