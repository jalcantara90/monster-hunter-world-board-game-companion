import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Form,
  Input,
  Modal,
  useModalManager,
} from '@mhwboard-companion/design-system';
import { zodResolver } from '@hookform/resolvers/zod';

import { campaignFormSchema } from './schema';

export type CampaignForm = {
  name: string;
};

const initialCampaignForm: CampaignForm = {
  name: '',
};

export function CampaignModal() {
  const { confirmModal, cancelModal } = useModalManager();
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitted, isSubmitting },
  } = useForm({
    defaultValues: initialCampaignForm,
    resolver: zodResolver(campaignFormSchema),
  });

  const onSubmit = (values: CampaignForm) => confirmModal(values);

  return (
    <Modal>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header title="Create Campaign" />
        <Modal.Content>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Campaign name:"
                error={fieldState.error?.message}
              />
            )}
          />
        </Modal.Content>
        <Modal.Footer>
          <Button
            type="button"
            variant="inverted"
            onClick={() => cancelModal()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={(isSubmitted && !isValid) || isSubmitting}
          >
            Create
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
