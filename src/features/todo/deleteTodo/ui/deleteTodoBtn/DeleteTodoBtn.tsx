import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonProps,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { useDeleteTodoMutation } from 'entities/todo';
import { useRef } from 'react';

interface Props extends ButtonProps {
  todoId: number;
}

export const DeleteTodoBtn = (props: Props) => {
  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const handleDelete = () => deleteTodo(props.todoId);

  return (
    <>
      <Button
        {...props}
        width="100%"
        variant="ghost"
        colorScheme="red"
        justifyContent="flex-start"
        onClick={onOpen}
      >
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent marginX={5}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete todo
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this todo?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Flex gap={2}>
                <Button
                  ref={cancelRef}
                  onClick={onClose}
                  isDisabled={isLoading}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={handleDelete}
                  isLoading={isLoading}
                >
                  Delete
                </Button>
              </Flex>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
