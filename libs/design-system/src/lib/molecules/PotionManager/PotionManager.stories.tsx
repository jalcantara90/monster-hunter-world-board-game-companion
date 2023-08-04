import { Meta, Story } from '@storybook/react';
import { PotionManager, PotionManagerProps } from './index';

export default {
  title: 'Molecules/PotionsManager',
  component: PotionManager,
} as Meta<PotionManagerProps>;

const Template: Story<PotionManagerProps> = (args) => (
  <PotionManager {...args} />
);


export const potionsManager = Template.bind({});
potionsManager.args = {
  potions: 1,
  update: (potions) => console.log(potions)
}
