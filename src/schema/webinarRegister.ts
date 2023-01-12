import { z } from "zod";

export const WebinarRegisterSchema = z.object({
  firstName: z.string().min(1, "forms.errors.required"),
  lastName: z.string().min(1, "forms.errors.required"),
  emailAddress: z.string().email("forms.email.invalid"),
  phone: z.object({
    prefix: z.string().min(1, "forms.errors.required"),
    number: z.string().min(2, "forms.errors.required"),
  }),
});

export type WebinarRegisterSchemaType = z.infer<typeof WebinarRegisterSchema>;
