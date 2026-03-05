import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(120, "Name is too long."),
  phone: z
    .string()
    .min(1, "Phone number is required.")
    .refine(
      (value) => value.replace(/\D/g, "").length === 10,
      "Phone number must contain exactly 10 digits (U.S. format)."
    ),
  description: z
    .string()
    .min(1, "Please describe the problem.")
    .max(1000, "Description is too long.")
});

export type ContactSchema = typeof contactSchema;

