import { Meta, Story } from '@storybook/react';
import { SectionTitle, SectionTitleProps, SectionTitleSkeleton } from './index';

export default {
  title: 'Atoms/SectionTitle',
  component: SectionTitle,
} as Meta;

const Template: Story<SectionTitleProps> = (args) => <SectionTitle {...args} />;

export const sectionTitle = Template.bind({});
sectionTitle.args = {
  title: 'Armors',
};

const TemplateSkeleton: Story = () => <SectionTitleSkeleton />;

export const sectionTitleSkeleton = TemplateSkeleton.bind({});
