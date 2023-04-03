import * as z from 'zod';

export const addCampaignHunterSchema = z.object({
  weaponType: z.number(),
  hunterId: z.string(),
});
