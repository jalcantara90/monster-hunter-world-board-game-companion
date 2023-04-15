import {
  Modal,
  useModalManager,
  Select,
  Button,
  Form,
} from '@mhwboard-companion/design-system';
import { useForm, Controller } from 'react-hook-form';
import { useMaterialList } from '../../materials/hooks';

export type InventoryItemForm = {
  materialId: string;
};

const initialInventoryItemForm: InventoryItemForm = {
  materialId: '',
};

export const InventoryItemModal = () => {
  const { materialList } = useMaterialList();
  const {
    handleSubmit,
    control,
    formState: { isSubmitted, isValid, isSubmitting },
  } = useForm({
    defaultValues: initialInventoryItemForm,
  });
  const { cancelModal, confirmModal } = useModalManager();

  const onSubmit = (values: InventoryItemForm) => {
    confirmModal(values);
  };

  return (
    <Modal>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header title="Add Inventory Item" />
        <Modal.Content>
          <Controller
            name="materialId"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <Select
                  {...field}
                  label="Item"
                  error={fieldState.error?.message}
                  options={materialList.map((material) => ({
                    value: material.id,
                    label: material.name,
                  }))}
                  onChange={(option) => {
                    field.onChange((option as { value: string }).value);
                  }}
                  placeholder="Example: Monster bone medium"
                />
              );
            }}
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
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
