import { z } from "zod";


const urlRegex = /\b(https?:\/\/|www\.)[^\s]+[^\s.,?!)]\b/;

const maliciousCodeRegex = /<\s*script|<\s*iframe|on\w+\s*=/i;
export const feedbackSchema = z.object({
  name: z.string().min(1),
  from: z
    .string({ required_error: "Email is required" })
    .email()
    .refine((val) => !urlRegex.test(val), {
      message: "The message must not contain a link",
    })
    .refine((val) => !maliciousCodeRegex.test(val), {
      message: "The message must not contain malicious code or scripts",
    }),

  body: z
    .string()
    
    .refine((val) => !urlRegex.test(val), {
      message: "The message must not contain a link",
    })
    .refine((val) => !maliciousCodeRegex.test(val), {
      message: "The message must not contain malicious code or scripts",
    }),
  subject: z.string({ required_error: "Please select an theme to display." }).min(1, { message: "Please select a theme to display." }),
});

export type TFeedbackSchema = z.infer<typeof feedbackSchema>;
