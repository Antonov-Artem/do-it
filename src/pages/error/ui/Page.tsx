import { Link } from 'react-router-dom';
import { Button, Center, Flex, Heading, Text } from '@chakra-ui/react';

export const ErrorPage = () => (
  <Center height="100vh">
    <Flex direction="column" alignItems="center" gap={8}>
      <Flex direction="column" alignItems="center" gap={3}>
        <Heading>404</Heading>
        <Text color="gray.600">Oops! Page Not Found</Text>
      </Flex>
      <Link to="/">
        <Button>Back to home</Button>
      </Link>
    </Flex>
  </Center>
);
