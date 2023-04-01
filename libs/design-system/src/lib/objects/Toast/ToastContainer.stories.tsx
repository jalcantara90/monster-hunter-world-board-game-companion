import { Meta, Story } from '@storybook/react';

import { Button } from '../../atoms/Button';
import { useToast } from './useToast';
import { ToastContainer } from './ToastContainer';

export default {
  title: 'Objects/ToastContainer',
  component: ToastContainer,
} as Meta;

const Template: Story = (args) => {
  const notify = useToast();

  const promiseResolved = () => new Promise((resolve) => {
    setTimeout(() => resolve({ resolved: true }), 3000);
  });
  const promiseRejected = () => new Promise((_, reject) => {
    setTimeout(() => reject({ resolved: false }), 3000);
  });

  const messages = {
    pending: 'Promise is pending',
    success: 'Promise resolved 👌',
    error: 'Promise rejected 🤯',
  };

  return (
    <div
      style={{
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'flex-end',
      }}
    >
      <Button onClick={() => notify.success(args.message)}>
        Show toast Success
      </Button>
      <Button onClick={() => notify.warning(args.message)}>
        Show toast Warning
      </Button>
      <Button onClick={() => notify.error(args.message)}>
        Show toast Error
      </Button>
      <Button
        onClick={async () => {
          try {
            const result = await notify.promise(promiseResolved(), messages);
            // eslint-disable-next-line no-console
            console.log(result);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Promise resolve
      </Button>
      <Button
        onClick={async () => {
          try {
            await notify.promise(promiseRejected(), messages);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Promise rejected
      </Button>
      <ToastContainer />
    </div>
  );
};

export const toastContainer = Template.bind({});
toastContainer.args = {
  message: 'Toast',
};
