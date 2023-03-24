import { Meta, Story } from '@storybook/react';
import { BrigadeCard, BrigadeCardProps, BrigadeCardSkeleton } from './index';

export default {
  title: 'Atoms/BrigadeCard',
  component: BrigadeCard,
} as Meta;

const Template: Story<BrigadeCardProps> = (args) => (
  <div style={{ width: '300px' }}>
    <BrigadeCard {...args} />
  </div>
);

export const brigadeCard = Template.bind({});
brigadeCard.args = {
  name: 'CancelaPlanes',
  image:
    'https://img.game8.co/3259862/fa21c24398efb6eb457c23789bef5b6d.jpeg/thumb',
};


const TemplateSkeleton: Story = () => (
  <div style={{ width: '300px' }}>
    <BrigadeCardSkeleton />
  </div>
);

export const brigadeCardSkeleton = TemplateSkeleton.bind({});

