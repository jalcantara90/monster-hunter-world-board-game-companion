import * as z from 'zod';

export const campaignFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Must contain at least 3 characters' }),
});
