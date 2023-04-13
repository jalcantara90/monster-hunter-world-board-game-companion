import { Meta, Story } from '@storybook/react';
import {
  BrigadeCard,
  BrigadeCardProps,
  BrigadeCardSkeleton,
  BrigadeCardSkeletonProps,
} from './index';

export default {
  title: 'Atoms/BrigadeCard',
  component: BrigadeCard,
} as Meta;

const Template: Story<BrigadeCardProps> = (args) => (
  <div style={{ width: '160px' }}>
    <BrigadeCard {...args} />
  </div>
);

export const brigadeCard = Template.bind({});
brigadeCard.args = {
  name: 'CancelaPlanes',
  index: 1,
};

const TemplateSkeleton: Story<BrigadeCardSkeletonProps> = (args) => (
  <div style={{ width: '160px' }}>
    <BrigadeCardSkeleton {...args} />
  </div>
);

export const brigadeCardSkeleton = TemplateSkeleton.bind({
  index: 6,
});
