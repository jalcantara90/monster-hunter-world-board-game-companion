import { ArmorPiece, Elemental } from '@mhwboard-companion/common-api';
import { Meta, Story } from '@storybook/react';
import { ArmorPieceCard, ArmorPieceCardProps } from './index';

export default {
  title: 'Molecules/Armor Card',
  component: ArmorPieceCard,
} as Meta<ArmorPieceCardProps>;

const Template: Story<ArmorPieceCardProps> = (args) => (
  <ArmorPieceCard {...args} />
);

// eslint-disable-next-line no-console
const craftAction = (armorId: string) => console.log(armorId);

export const onlyMandatoryInfo = Template.bind({});
onlyMandatoryInfo.args = {
  id: '1',
  name: 'Kulu yaku Head',
  defense: 1,
  armorPiece: ArmorPiece.HEAD
};

export const fullArmor = Template.bind({});
fullArmor.args = {
  id: '3',
  name: 'Alloy mall',
  armorPiece: ArmorPiece.CHEST,
  defense: 1,
  elementalDefense: 1,
  elementalDefenseType: Elemental.FIRE,
  craftArmor: craftAction,
  materials: [
    {
      id: '1',
      name: 'Fucium ore',
      quantity: 2,
    },
    {
      id: '2',
      name: 'Carbalite ore',
      quantity: 2,
    },
    {
      id: '3',
      name: 'monster keenbon',
      quantity: 2,
    },
    {
      id: '4',
      name: 'Dragonite ore',
      quantity: 2,
    },
  ],
};
