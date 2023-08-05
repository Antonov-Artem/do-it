import { ReactNode } from 'react';
import { Card, CardBody, Flex, Text } from '@chakra-ui/react';
import { Todo } from '../../model/types';

interface Props {
  todo?: Todo;
  prefixSlot?: ReactNode;
  middleSlot?: ReactNode;
  suffixSlot?: ReactNode;
}

export const TodoCard = ({
  todo,
  prefixSlot,
  middleSlot,
  suffixSlot,
}: Props) => {
  return (
    <Card>
      <CardBody>
        <Flex justifyContent="space-between">
          <Flex alignItems="center" gap={15}>
            {prefixSlot}
            <Text
              as={todo?.completed ? 'del' : 'p'}
              color={todo?.completed ? 'gray.500' : 'black'}
            >
              {todo?.title}
            </Text>
          </Flex>
          {middleSlot}
          {suffixSlot}
        </Flex>
      </CardBody>
    </Card>
  );
};
