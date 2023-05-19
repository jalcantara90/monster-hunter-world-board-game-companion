import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './index';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (props) => <Avatar {...props} />;

export const avatar = Template.bind({});
avatar.args = {
  image:
    'https://pbs.twimg.com/profile_images/1305523485750579200/iTA80rdo_400x400.jpg',
};
