import { Meta, Story } from '@storybook/react';
import { AddHunterButton, AddHunterButtonProps } from './index';
import { PlusIcon } from '../../icons/PlusIcon';

export default {
  title: 'Atoms/AddHunterButton',
  component: AddHunterButton,
} as Meta;

const Template: Story<AddHunterButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <AddHunterButton {...args} />
  </div>
);

export const addHunterButton = Template.bind({});
addHunterButton.args = {
  children: (
    <>
      <PlusIcon /> Add Hunter
    </>
  ),
};
