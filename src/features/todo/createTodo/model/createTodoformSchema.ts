import { z } from 'zod';

export const createTodoFormSchema = z.object({
  title: z.string().trim().nonempty({ message: 'Todo title is required!' }),
});

export type CreateTodoFormData = z.infer<typeof createTodoFormSchema>;
