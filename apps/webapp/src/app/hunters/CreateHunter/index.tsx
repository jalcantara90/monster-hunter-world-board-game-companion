import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  Input,
  useToast,
} from '@mhwboard-companion/design-system';
import { Controller, useForm } from 'react-hook-form';
import { CreateHunterForm, createHunterSchema } from './schema';

import styles from './CreateHunter.module.scss';
import { useCreateHunter } from './hooks';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';

const initialCreateHunterForm = {
  name: '',
  palicoName: '',
};

export function CreateHunter() {
  const { user } = useAuth();
  const { createHunter } = useCreateHunter();
  const notify = useToast();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitted, isSubmitting },
  } = useForm<CreateHunterForm>({
    defaultValues: initialCreateHunterForm,
    resolver: zodResolver(createHunterSchema),
  });

  const onSubmit = async (values: CreateHunterForm) => {
    try {
      await notify.promise(createHunter({ ...values, userId: user.uid }), {
        success: 'Enjoy hunting!',
        error: {
          render({ data }) {
            return <div>{(data as { message: string }).message}</div>;
          },
        },
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.createHunter}>
      <h1>Create your hunter</h1>
      <p>
        You are almost ready to start hunting the most dangerous monsters, but
        first we need you fill the hunter license
      </p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Hunter name:"
              placeholder="Admiral"
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="palicoName"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Palico name:"
              placeholder="Meowscular Chef"
              error={fieldState.error?.message}
            />
          )}
        />

        <Button disabled={(isSubmitted && !isValid) || isSubmitting}>
          Register your hunter license
        </Button>
      </Form>
    </section>
  );
}
