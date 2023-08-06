import { Box } from '@chakra-ui/react';
import { TodoList } from 'widgets/todo/todoList';
import { CreateTodoForm } from 'features/todo/createTodo';

export const HomePage = () => {
  return (
    <>
      <Box padding="30px">
        <TodoList />
      </Box>
      <CreateTodoForm />
    </>
  );
};
