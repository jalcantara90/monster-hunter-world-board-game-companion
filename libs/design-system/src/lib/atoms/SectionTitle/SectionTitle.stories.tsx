import { Meta, Story } from '@storybook/react';
import { SectionTitle, SectionTitleProps } from './index';

export default {
  title: 'Atoms/SectionTitle',
  component: SectionTitle,
} as Meta;

const Template: Story<SectionTitleProps> = (args) => <SectionTitle {...args} />;

export const sectionTitle = Template.bind({});
sectionTitle.args = {
  title: 'Armors'
};
