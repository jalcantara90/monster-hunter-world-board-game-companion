import { Meta, Story } from '@storybook/react';
import { Popover, PopoverProps } from './index';
import { Avatar } from '../Avatar';

export default {
  title: 'Atoms/Popover',
  component: Popover,
} as Meta;

const Template: Story<PopoverProps> = (props) => (
  <Popover {...props}>
    <Avatar image="https://pbs.twimg.com/profile_images/1305523485750579200/iTA80rdo_400x400.jpg" />
  </Popover>
);

export const popover = Template.bind({});
popover.args = {
  actions: [
    // eslint-disable-next-line no-console
    { label: 'Settings', action: () => console.log('settings clicked') },
    // eslint-disable-next-line no-console
    { label: 'Logout', action: () => console.log('logout clicked') },
  ],
};
