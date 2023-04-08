import {
  Button,
  Input,
  ListContainer,
  SectionTitle,
  WeaponCard,
  useToast,
} from '@mhwboard-companion/design-system';
import { useWeaponList } from './hooks';
import { useMemo, useState } from 'react';
import { useDebounce } from '@mhwboard-companion/utils';
import { useInventoryContext } from '../inventory/InvventoryContext';
import { useNavigate } from 'react-router-dom';

export function WeaponList() {
  const navigate = useNavigate();
  const { inventory } = useInventoryContext();
  const notify = useToast();
  const { weaponList, craftWeapon } = useWeaponList();
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  const weaponFilteredList = useMemo(() => {
    const filteredWeaponList = weaponList.filter(
      (weapon) => !inventory.weapons.some((w) => w.id === weapon.id)
    );

    if (!debouncedSearch) {
      return filteredWeaponList;
    }

    return filteredWeaponList.filter((weapon) =>
      weapon.name.includes(debouncedSearch)
    );
  }, [debouncedSearch, weaponList, inventory.weapons]);

  const handleCraftWeapon = async (weaponId: string) => {
    try {
      await notify.promise(craftWeapon(inventory.inventoryId, weaponId), {
        success: 'Weapon crafted',
        pending: 'Crafting weapon...',
        error: {
          render({ data }) {
            return <div>{data as string}</div>;
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ListContainer>
      <div>
        <Button variant="inverted" onClick={() => navigate(-1)}>
          Back to inventory
        </Button>
      </div>

      <SectionTitle title="Weapons" />
      <Input
        label="Search by weapon name:"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        hideError
      />
      {weaponFilteredList.map((weapon) => (
        <WeaponCard
          key={weapon.id}
          {...weapon}
          craftWeapon={handleCraftWeapon}
        />
      ))}
    </ListContainer>
  );
}
