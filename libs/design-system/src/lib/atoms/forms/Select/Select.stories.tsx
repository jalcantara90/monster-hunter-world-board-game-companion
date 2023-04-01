import { Meta, Story } from '@storybook/react';
import { Select, SelectProps } from './index';


export default {
  title: 'Atoms/Forms/Select',
  component: Select,
} as Meta<SelectProps>;

const Template: Story<SelectProps> = (args) =><Select {...args} />;

export const select = Template.bind({});
select.args = {
  options: [
    { value: '0', label: 'Great Sword' },
    { value: '1', label: 'Sword and Shield' },
  ],
  noOptionsMessage: () => 'Empty options',
  placeholder: 'Select weapon...',
  label: 'Weapon'
};
