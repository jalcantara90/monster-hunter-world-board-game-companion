import { Meta, Story } from '@storybook/react';
import { Collapsable } from './index';
import { SectionTitle } from '../../atoms/SectionTitle';
import { Button } from '../../atoms/Button';
import { InventoryItem } from '../../molecules/InventoryItem';

export default {
  title: 'Objects/Collapsable',
  component: Collapsable,
} as Meta;

const Template: Story = () => {
  return (
    <Collapsable>
      <Collapsable.Header>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            height: '2rem',
          }}
        >
          <SectionTitle title="Items" />
          <Button variant="inverted">Add Item</Button>
        </div>
      </Collapsable.Header>
      <Collapsable.Content>
        <InventoryItem
          id="1"
          name="Machalite ore"
          quantity={2}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update={() => {}}
        />
        <InventoryItem
          id="2"
          name="Carbalite ore"
          quantity={3}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update={() => {}}
        />
      </Collapsable.Content>
    </Collapsable>
  );
};

export const collapsable = Template.bind({});
collapsable.args = {};
