import {
  Button,
  Form,
  Input,
  Modal,
  useModalManager,
} from '@mhwboard-companion/design-system';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { brigadeFormSchema } from './schema';

export type BrigadeForm = {
  name: string;
};

const initialBrigadeForm: BrigadeForm = {
  name: '',
};

export function BrigadeModal() {
  const { confirmModal, cancelModal } = useModalManager();
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitted, isSubmitting },
  } = useForm({
    defaultValues: initialBrigadeForm,
    resolver: zodResolver(brigadeFormSchema),
  });

  const onSubmit = (values: BrigadeForm) => confirmModal(values);

  return (
    <Modal>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header title="Create Brigade" />
        <Modal.Content>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Brigade name:"
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
