import { Meta, Story } from '@storybook/react';
import { SideMenuContextProvider } from '../../molecules/SideMenu';
import { BurgerButton } from './index';

export default {
  title: 'Atoms/BurgerButton',
  component: BurgerButton,
} as Meta;

const Template: Story = () => (
  <SideMenuContextProvider>
    <BurgerButton />
  </SideMenuContextProvider>
);

export const burgerButton = Template.bind({});
burgerButton.args = {};
