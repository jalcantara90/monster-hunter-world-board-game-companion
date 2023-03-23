import { Meta, Story } from '@storybook/react';
import { SideMenu, SideMenuProps } from './index';

export default {
  title: 'Molecules/SideMenu',
  component: SideMenu,
} as Meta;

const Template: Story<SideMenuProps> = (args) => (
  <SideMenu {...args} />
);

export const sideMenu = Template.bind({});
sideMenu.args = {
  items: [
    {
      name: 'Campaigns',
      route: '/campaigns',
    },
    {
      name: 'Hunters',
      route: '/hunters',
    },
    {
      name: 'Brigades',
      route: '/brigades',
    },
    {
      name: 'Armors',
      route: '/armors',
    },
    {
      name: 'Materials',
      route: '/materials',
    },
    {
      name: 'Monsters',
      route: '/monsters',
    },
    {
      name: 'Weapons',
      route: '/weapons',
    },
  ],
};
