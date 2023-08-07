import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUpdateTodoTitleMutation } from 'entities/todo';
import {
  EditTodoFormData,
  editTodoFormSchema,
} from '../../model/editTodoFormSchema';

interface Props {
  todoId: number;
}

export const EditTodoBtn = ({ todoId }: Props) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose: closeModal } = useDisclosure();
  const {
    reset,
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<EditTodoFormData>({
    resolver: zodResolver(editTodoFormSchema),
  });
  const [updateTitle, { status }] = useUpdateTodoTitleMutation();

  const onSubmit = (data: EditTodoFormData) =>
    updateTitle({ id: todoId, ...data });

  const onClose = () => {
    reset();

    closeModal();
  };

  useEffect(() => {
    switch (status) {
      case 'rejected': {
        toast({
          title: 'Error',
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: 'top',
        });

        break;
      }
      case 'fulfilled': {
        reset();

        closeModal();

        break;
      }
    }
  }, [status, reset, toast, closeModal]);

  return (
    <>
      <Button
        width="100%"
        variant="ghost"
        justifyContent="start"
        onClick={onOpen}
      >
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent marginX={5}>
          <ModalHeader>Edit todo</ModalHeader>
          <ModalBody>
            <form id="edit-todo" onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  {...register('title')}
                  isDisabled={status === 'pending'}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter gap={2}>
            <Button onClick={onClose} isDisabled={status === 'pending'}>
              Cancel
            </Button>
            <Button
              form="edit-todo"
              type="submit"
              colorScheme="blue"
              isDisabled={!isValid}
              isLoading={status === 'pending'}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
