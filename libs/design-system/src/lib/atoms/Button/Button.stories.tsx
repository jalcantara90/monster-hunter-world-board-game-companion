import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Suscribirse</Button>
);

export const button = Template.bind({});
button.args = {};
