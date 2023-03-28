import { Meta, Story } from '@storybook/react';
import {
  CampaignHunterCard,
  CampaignHunterCardProps,
  CampaignHunterCardSkeleton,
} from './index';

export default {
  title: 'Molecules/CampaignHunterCard',
  component: CampaignHunterCard,
} as Meta;

const Template: Story<CampaignHunterCardProps> = (args) => (
  <CampaignHunterCard {...args} />
);

export const campaignHunterCard = Template.bind({});
campaignHunterCard.args = {
  name: 'Zeck',
  palicoName: 'Tanuki',
  weaponType: 0,
};

const TemplateSkeleton: Story = (args) => (
  <CampaignHunterCardSkeleton {...args} />
);

export const campaignHunterCardSkeleton = TemplateSkeleton.bind({});
campaignHunterCardSkeleton.args = {};
