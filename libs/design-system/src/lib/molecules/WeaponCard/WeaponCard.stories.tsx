import { WeaponType } from '@mhwboard-companion/common-api';
import { Meta, Story } from '@storybook/react';
import { WeaponCard, WeaponCardProps } from './index';

export default {
  title: 'Molecules/Weapon Card',
  component: WeaponCard,
} as Meta<WeaponCardProps>;

const Template: Story<WeaponCardProps> = (args) => <WeaponCard {...args} />;

// eslint-disable-next-line no-console
const craftAction = (weaponId: string) => console.log(weaponId);

export const onlyMandatoryInfo = Template.bind({});
onlyMandatoryInfo.args = {
  id: '3',
  name: 'Buster Sword',
  weaponType: WeaponType.GREAT_SWORD,
  damageOne: 8,
  damageTwo: 3,
  damageThree: 3,
  craftWeapon: craftAction
};

export const withMaterials = Template.bind({});
withMaterials.args = {
  id: '2',
  name: 'Iron Sword and Shield',
  weaponType: WeaponType.SWORD_AND_SHIELD,
  damageOne: 8,
  damageTwo: 3,
  damageThree: 3,
  materials: [
    {
      id: '1',
      name: 'Fucium ore',
      quantity: 2
    },
    {
      id: '2',
      name: 'Carbalite ore',
      quantity: 2
    },
  ],
  craftWeapon: craftAction
};

export const withExtraDefense = Template.bind({});
withExtraDefense.args = {
  id: '4',
  name: 'Iron Gunlance',
  weaponType: WeaponType.GUNLANCE,
  damageOne: 8,
  damageTwo: 3,
  damageThree: 3,
  defense: 1,
  craftWeapon: craftAction
};

export const fullWeapon = Template.bind({});
fullWeapon.args = {
  id: '1',
  name: 'Thunder Lance',
  weaponType: WeaponType.LANCE,
  previousWeapon: {
    name: 'Iron lance',
    id: 'ironLanceId'
  },
  damageOne: 8,
  damageTwo: 3,
  damageThree: 3,
  damageFour: 1,
  damageFive: 1,
  defense: 1,
  materials: [
    {
      id: '1',
      name: 'Fucium ore',
      quantity: 2
    },
    {
      id: '2',
      name: 'Carbalite ore',
      quantity: 2
    },
    {
      id: '3',
      name: 'monster keenbon',
      quantity: 2
    },
    {
      id: '4',
      name: 'Dragonite ore',
      quantity: 2
    },
  ],
  craftWeapon: craftAction
};
