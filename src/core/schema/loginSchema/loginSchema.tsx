import * as z from "zod"

export const SiginupSchema = z.object({
    email: z.email("فرمت ایمیل صحیح نیست"),     
  });
export type SignupFormData = z.infer<typeof SiginupSchema>;