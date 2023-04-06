import { Meta, Story } from '@storybook/react';
import { InventoryItem, InventoryItemProps } from './index';

export default {
  title: 'Molecules/InventoryItem',
  component: InventoryItem,
} as Meta;

const Template: Story<InventoryItemProps> = (args) => (
  <InventoryItem {...args} />
);

const updateAction = (id: string, quantity: number) =>
  // eslint-disable-next-line no-console
  console.log(`Update item ${id} with quantity: ${quantity}`);

export const inventoryItem = Template.bind({});
inventoryItem.args = {
  name: 'Machalite ore',
  quantity: 2,
  update: updateAction,
};
