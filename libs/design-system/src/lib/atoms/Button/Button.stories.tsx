import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    page: null,
    description: {
      component: Button,
    },
    actions: {
      handles: ['click']
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  children: 'Suscribirse',
};
