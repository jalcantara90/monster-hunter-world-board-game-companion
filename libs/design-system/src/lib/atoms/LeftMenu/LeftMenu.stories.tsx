import { Meta, Story } from '@storybook/react';
import { SideMenuContextProvider } from '../../molecules/SideMenu';
import { LeftMenu, LeftMenuProps } from './index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export default {
  title: 'Atoms/LeftMenu',
  component: LeftMenu,
} as Meta;

const Template: Story<LeftMenuProps> = (args) => (
  <SideMenuContextProvider initialActive={true}>
    <RouterProvider
      router={createBrowserRouter([
        { path: '/', element: <LeftMenu {...args} /> },
      ])}
    />
  </SideMenuContextProvider>
);

export const leftMenu = Template.bind({});
leftMenu.args = {
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
