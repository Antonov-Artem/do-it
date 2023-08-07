import { z } from 'zod';

export const editTodoFormSchema = z.object({
  title: z.string().trim().nonempty({ message: 'Todo title is required!' }),
});

export type EditTodoFormData = z.infer<typeof editTodoFormSchema>;
