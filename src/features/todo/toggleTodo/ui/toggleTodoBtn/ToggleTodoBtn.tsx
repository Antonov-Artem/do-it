import { Checkbox } from '@chakra-ui/react';
import { Todo } from 'entities/todo/model/types';
import { useUpdateTodoStatusMutation } from 'entities/todo';

interface Props {
  todo: Todo;
}

export const ToggleTodoBtn = ({ todo }: Props) => {
  const [toggleTodo] = useUpdateTodoStatusMutation();

  const handleChange = () =>
    toggleTodo({ id: todo.id, completed: !todo.completed });

  return (
    <Checkbox
      defaultChecked={todo.completed}
      checked={todo.completed}
      onChange={handleChange}
    />
  );
};
