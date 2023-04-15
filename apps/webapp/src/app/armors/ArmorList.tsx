import {
  ArmorPieceCard,
  Button,
  Input,
  ListContainer,
  SectionTitle,
  useToast,
} from '@mhwboard-companion/design-system';
import { useArmorList } from './hooks';
import { useMemo, useState } from 'react';
import { useDebounce } from '@mhwboard-companion/utils';
import { useInventoryContext } from '../inventory/InvventoryContext';
import { useNavigate } from 'react-router-dom';

export function ArmorList() {
  const navigate = useNavigate();
  const { inventory } = useInventoryContext();
  const notify = useToast();
  const { armorList, craftArmor } = useArmorList();
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  const armorFilteredList = useMemo(() => {
    const filteredArmorList = armorList.filter(
      (armor) => !inventory.armors.some((w) => w.id === armor.id)
    );

    if (!debouncedSearch) {
      return filteredArmorList;
    }

    return filteredArmorList.filter((weapon) =>
      weapon.name
        .toLocaleLowerCase()
        .includes(debouncedSearch.toLocaleLowerCase())
    );
  }, [debouncedSearch, armorList, inventory.armors]);

  const handleCraftArmor = async (weaponId: string) => {
    try {
      await notify.promise(craftArmor(inventory.inventoryId, weaponId), {
        success: 'Armor crafted',
        pending: 'Crafting armor...',
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

      <SectionTitle title="Armors" />
      <Input
        label="Search by armors name:"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        hideError
        type="search"
        placeholder="Example: Alloy Helm"
      />
      {armorFilteredList.map((armor) => (
        <ArmorPieceCard
          key={armor.id}
          {...armor}
          craftArmor={handleCraftArmor}
        />
      ))}
    </ListContainer>
  );
}
