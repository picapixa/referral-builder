import { z } from "zod";

const inputSchema = z.object({
  id: z.string().optional(),
  given_name: z.string().min(1),
  surname: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  address_number: z.string().min(1),
  address_street: z.string().min(1),
  address_suburb: z.string().min(1),
  address_state: z.string().min(1),
  address_postcode: z.string().min(1),
  address_country: z.string().min(1),
});

type ValidationSchema = z.infer<typeof inputSchema>;

export type { ValidationSchema as CreateReferralInputSchema };
export { inputSchema as createReferralInputSchema };
