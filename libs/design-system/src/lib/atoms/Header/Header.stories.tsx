import { Meta, Story } from '@storybook/react';
import { Header } from './index';

export default {
  title: 'Atoms/Header',
  component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const header = Template.bind({});
header.args = {};
