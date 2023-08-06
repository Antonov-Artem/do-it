import { Center, Container, Flex, Spinner, Text } from '@chakra-ui/react';
import { TodoCard, useGetTodosQuery } from 'entities/todo';

export const TodoList = () => {
  // TODO: Implement infinite scroll
  const {
    data: todos,
    isLoading,
    isFetching,
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

  if (isLoading || isFetching) {
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
              <TodoCard key={todo.id} todo={todo} />
            ))}
          </Flex>
        </Container>
      ) : (
        <Center h="100vh">No todos</Center>
      )}
    </>
  );
};
