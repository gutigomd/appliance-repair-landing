import type { z } from "zod";
import { contactSchema } from "@/lib/validation/contact";

export type ContactFormValues = z.infer<typeof contactSchema>;

