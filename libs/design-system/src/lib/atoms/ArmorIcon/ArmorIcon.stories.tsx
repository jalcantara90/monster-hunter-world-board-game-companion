import { Meta, Story } from '@storybook/react';
import { ArmorIcon, ArmorIconProps } from './index';

export default {
  title: 'Atoms/ArmorIcon',
  component: ArmorIcon,
} as Meta;

const Template: Story<ArmorIconProps> = (args) => <ArmorIcon {...args} />;

export const helmet = Template.bind({});
helmet.args = {
  armorPiece: 0,
};

export const chest = Template.bind({});
chest.args = {
  armorPiece: 1,
};

export const greaves = Template.bind({});
greaves.args = {
  armorPiece: 2,
};
