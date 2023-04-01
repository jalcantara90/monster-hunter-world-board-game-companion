import { Meta, Story } from '@storybook/react';
import { FullPageLoader } from './index';

export default {
  title: 'Atoms/FullPageLoader',
  component: FullPageLoader,
} as Meta;

const Template: Story = (args) => (
  <FullPageLoader {...args} />
);

export const fullPageLoader = Template.bind({});
fullPageLoader.args = {};
