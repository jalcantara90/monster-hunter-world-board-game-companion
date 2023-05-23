import * as z from 'zod';

export const createHunterSchema = z.object({
  name: z
    .string({
      required_error: 'We need fill your hunter name to register your license',
    })
    .nonempty({
      message: 'We need your hunter name to register your license',
    })
    .min(3, { message: 'Hunter name should contain at least 3 characters' }),

  palicoName: z.string().optional(),
});

export type CreateHunterForm = z.infer<typeof createHunterSchema>;
