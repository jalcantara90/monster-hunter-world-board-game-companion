import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  Modal,
  Select,
  useModalManager,
} from '@mhwboard-companion/design-system';
import { WeaponType } from '@mhwboard-companion/common-api';

import { addCampaignHunterSchema } from './schema';
import { useAddCampaignHunterModal } from './hooks';
import { weaponList } from '../../shared/weapon-list';

export type AddCampaignHunterForm = {
  hunterId: string;
  weaponType: WeaponType;
};

const initialAddCampaignHunterForm: AddCampaignHunterForm = {
  hunterId: '',
  weaponType: WeaponType.GREAT_SWORD,
};

export function AddCampaignHunterModal() {
  const { hunterList } = useAddCampaignHunterModal();
  const { confirmModal, cancelModal } = useModalManager();
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitted, isSubmitting },
  } = useForm({
    defaultValues: initialAddCampaignHunterForm,
    resolver: zodResolver(addCampaignHunterSchema),
  });

  const onSubmit = (values: AddCampaignHunterForm) => confirmModal(values);

  return (
    <Modal>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header title="Add Hunter" />
        <Modal.Content>
          <Controller
            name="hunterId"
            control={control}
            render={({ field, fieldState }) => (
              <Select
                {...field}
                label="Hunter:"
                error={fieldState.error?.message}
                options={hunterList.map((hunter) => ({
                  value: hunter.id,
                  label: hunter.name,
                }))}
                onChange={(option) =>
                  field.onChange((option as { value: string }).value)
                }
              />
            )}
          />
          <Controller
            name="weaponType"
            control={control}
            render={({ field, fieldState }) => (
              <Select
                {...field}
                label="Weapon:"
                error={fieldState.error?.message}
                options={weaponList}
                onChange={(option) =>
                  field.onChange((option as { value: string }).value)
                }
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
