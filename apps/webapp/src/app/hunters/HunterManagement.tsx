import { Link, useParams } from 'react-router-dom';
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
  Input,
  Collapsable,
} from '@mhwboard-companion/design-system';
import { InventoryMaterial } from '../campaigns/types';

import styles from './HunterManagement.module.scss';
import {
  InventoryItemForm,
  InventoryItemModal,
} from '../inventory/InventoryItemModal';
import { useInventoryContext } from '../inventory/InvventoryContext';
import { useMemo, useState } from 'react';
import { useDebounce } from '@mhwboard-companion/utils';

export function HunterManagement() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const { campaignId, hunterId } = useParams();

  const { inventory } = useInventoryContext();
  const { hunter } = useHunterManagement({
    hunterId: hunterId as string,
  });

  const { loadInventory } = useHunterInventory({
    campaignId: campaignId as string,
    hunterId: hunterId as string,
  });

  const [commonMaterials, otherMaterials] = useMemo(() => {
    if (!debouncedSearch) {
      return [inventory.commonMaterials, inventory.otherMaterials];
    }

    const filterMaterialPredicate = (material: InventoryMaterial) =>
      material.name
        .toLocaleLowerCase()
        .includes(debouncedSearch.toLocaleLowerCase());

    return [
      inventory.commonMaterials.filter(filterMaterialPredicate),
      inventory.otherMaterials.filter(filterMaterialPredicate),
    ];
  }, [debouncedSearch, inventory.commonMaterials, inventory.otherMaterials]);

  if (!hunter?.name) {
    return <div>Loading...</div>;
  }

  const updateInventory = async () => {
    await loadInventory(campaignId as string, hunterId as string);
  };

  return (
    <section className={styles.hunterManagement}>
      <SectionTitle title={hunter?.name} />

      <Input
        label="Filter materials by name:"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        hideError
      />
      <InventoryItemList
        inventoryId={inventory.inventoryId}
        title="Common Materials"
        materialList={commonMaterials}
        updateInventory={updateInventory}
      />
      <InventoryItemList
        inventoryId={inventory.inventoryId}
        title="Other Materials"
        materialList={otherMaterials}
        updateInventory={updateInventory}
      />
      <Collapsable>
        <Collapsable.Header>
          <div className={styles.titleContainer}>
            <h5>Weapons: </h5>
            <Link to="weapons">
              <Button> Add Weapons </Button>
            </Link>
          </div>
        </Collapsable.Header>
        <Collapsable.Content>
          <ListContainer>
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
          </ListContainer>
        </Collapsable.Content>
      </Collapsable>
      <Collapsable>
        <Collapsable.Header>
          <div className={styles.titleContainer}>
            <h5>Armors: </h5>
            <Link to="armors">
              <Button> Add Armors </Button>
            </Link>
          </div>
        </Collapsable.Header>
        <Collapsable.Content>
          <ListContainer>
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
          </ListContainer>
        </Collapsable.Content>
      </Collapsable>
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

      updateInventory();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Collapsable>
      <Collapsable.Header>
        <div className={styles.titleContainer}>
          <h5>{title}</h5>
          <Button onClick={showMaterialModalForm}> Add Material </Button>
        </div>
      </Collapsable.Header>
      <Collapsable.Content>
        <ListContainer>
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
      </Collapsable.Content>
    </Collapsable>
  );
};
