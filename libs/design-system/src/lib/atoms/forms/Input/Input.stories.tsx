import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './index';

export default {
  title: 'Atoms/Forms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
  placeholder: 'Write hunter name',
  label: 'Hunter name',
  error: ''
};
