import { Elemental } from '@mhwboard-companion/common-api';
import { Meta, Story } from '@storybook/react';
import { ElementType, ElementTypeProps } from './index';

export default {
  title: 'Atoms/ElementType',
  component: ElementType,
} as Meta;

const Template: Story<ElementTypeProps> = (args) => <ElementType {...args} />;

export const elementType = Template.bind({});
elementType.args = {
  elementType: Elemental.FIRE,
};
