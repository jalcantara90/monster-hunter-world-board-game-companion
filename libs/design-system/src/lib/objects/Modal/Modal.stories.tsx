import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './index';

import { Button } from '../../atoms/Button';
import { CampaignHunterCardSkeleton } from '../../molecules/CampaignHunterCard';

export default {
  title: 'Objects/Modal',
  component: Modal,
} as Meta<ModalProps>;

const Template: Story = (args) => {
  return (
    <div
      style={{
        position: 'relative',
        height: '97vh',
        width: '100%',
        padding: '0',
        margin: '0',
      }}
    >
      <Modal>
        <Modal.Header title={args.title} />
        <Modal.Content>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}
          >
            <CampaignHunterCardSkeleton />
            <CampaignHunterCardSkeleton />
            <CampaignHunterCardSkeleton />
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}
          >
            <Button variant="inverted"> Cancel </Button>
            <Button> Save </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const modal = Template.bind({});
modal.args = {
  title: 'Create Campaign',
};
