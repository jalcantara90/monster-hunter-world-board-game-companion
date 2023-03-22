import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Suscribirse</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  mode: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  mode: 'tertiary',
};

export const Inverted = Template.bind({});
Inverted.args = {
  mode: 'inverted',
};
