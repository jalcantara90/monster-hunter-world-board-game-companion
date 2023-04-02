import { Meta, Story } from '@storybook/react';
import { FloatingButton, FloatingButtonProps } from './index';

export default {
  title: 'Atoms/FloatingButton',
  component: FloatingButton,
} as Meta;

const Template: Story<FloatingButtonProps> = (args) => (
  <FloatingButton {...args} />
);

export const floatingButton = Template.bind({});
floatingButton.args = {
  children: '+',
};
