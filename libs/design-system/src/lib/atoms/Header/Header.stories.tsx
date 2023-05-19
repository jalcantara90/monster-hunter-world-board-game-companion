import { Meta, Story } from '@storybook/react';
import { Header } from './index';

import { MonsterHunterWorldLogo } from '../MonsterHunterLogo';
import { Popover } from '../Popover';
import { Avatar } from '../Avatar';

export default {
  title: 'Atoms/Header',
  component: Header,
} as Meta;

const Template: Story = () => (
  <Header>
    <MonsterHunterWorldLogo />
    <Popover
      actions={[
        // eslint-disable-next-line no-console
        { label: 'Settings', action: () => console.log('settings clicked') },
        // eslint-disable-next-line no-console
        { label: 'Logout', action: () => console.log('logout clicked') },
      ]}
    >
      <Avatar
        image="https://pbs.twimg.com/profile_images/1305523485750579200/iTA80rdo_400x400.jpg"
        size="xs"
      />
    </Popover>
  </Header>
);

export const header = Template.bind({});
header.args = {};
