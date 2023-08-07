import {
  Center,
  Container,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { TodoCard, useGetTodosQuery } from 'entities/todo';
import { DeleteTodoBtn } from 'features/todo/deleteTodo';
import { EditTodoBtn } from 'features/todo/editTodo';
import { ToggleTodoBtn } from 'features/todo/toggleTodo';

export const TodoList = () => {
  // TODO: Implement infinite scroll
  const {
    data: todos,
    isLoading,
    error,
  } = useGetTodosQuery({
    _page: 1,
    _limit: 100,
  });

  if (error) {
    return (
      <Center h="100%">
        <Flex direction="column" alignItems="center" gap={5}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/material-outlined/48/4A5568/cancel-2.png"
            alt="cancel-2"
          />
          <Text color="gray.600">Failed to fetch todos :(</Text>
        </Flex>
      </Center>
    );
  }

  if (isLoading) {
    return (
      <Center h="100%">
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      {todos?.length ? (
        <Container maxW="500px">
          <Flex direction="column" gap={2}>
            {todos?.map(todo => (
              <TodoCard
                key={todo.id}
                todo={todo}
                prefixSlot={<ToggleTodoBtn todo={todo} />}
                suffixSlot={
                  <Menu placement="bottom-end">
                    <MenuButton
                      as={IconButton}
                      icon={<HamburgerIcon />}
                      variant="ghost"
                    />
                    <MenuList>
                      <MenuItem as={() => <EditTodoBtn todoId={todo.id} />} />
                      <MenuDivider />
                      <MenuItem as={() => <DeleteTodoBtn todoId={todo.id} />} />
                    </MenuList>
                  </Menu>
                }
              />
            ))}
          </Flex>
        </Container>
      ) : (
        <Center h="100%">
          <Flex direction="column" alignItems="center" gap={5}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/material-outlined/48/4A5568/cancel-2.png"
              alt="cancel-2"
            />
            <Text color="gray.600">No todos :(</Text>
          </Flex>
        </Center>
      )}
    </>
  );
};
