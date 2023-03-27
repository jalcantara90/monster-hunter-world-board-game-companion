import { Meta, Story } from '@storybook/react';
import { WeaponIcon, WeaponIconProps } from './index';

export default {
  title: 'Atoms/WeaponIcon',
  component: WeaponIcon,
} as Meta;

const Template: Story<WeaponIconProps> = (args) => <WeaponIcon {...args} />;

export const greatSwordIcon = Template.bind({});
greatSwordIcon.args = {
  weaponType: 0,
};
export const swordAndShieldIcon = Template.bind({});
swordAndShieldIcon.args = {
  weaponType: 1,
};
export const doubleBlades = Template.bind({});
doubleBlades.args = {
  weaponType: 2,
};
export const chargeBlade = Template.bind({});
chargeBlade.args = {
  weaponType: 3,
};
export const lance = Template.bind({});
lance.args = {
  weaponType: 4,
};
export const gunLance = Template.bind({});
gunLance.args = {
  weaponType: 5,
};
export const insectGlaive = Template.bind({});
insectGlaive.args = {
  weaponType: 6,
};
export const hammer = Template.bind({});
hammer.args = {
  weaponType: 7,
};
export const huntingHorn = Template.bind({});
huntingHorn.args = {
  weaponType: 8,
};
export const longSword = Template.bind({});
longSword.args = {
  weaponType: 9,
};
export const switchAxe = Template.bind({});
switchAxe.args = {
  weaponType: 10,
};
export const bow = Template.bind({});
bow.args = {
  weaponType: 11,
};
export const lightbowgun = Template.bind({});
lightbowgun.args = {
  weaponType: 12,
};
export const heavyBowgun = Template.bind({});
heavyBowgun.args = {
  weaponType: 13,
};
