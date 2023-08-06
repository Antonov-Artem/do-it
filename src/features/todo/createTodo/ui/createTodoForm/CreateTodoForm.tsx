import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Flex, Input, useToast } from '@chakra-ui/react';
import { useCreateTodoMutation } from 'entities/todo';
import {
  CreateTodoFormData,
  createTodoFormSchema,
} from '../../model/createTodoformSchema';
import css from './createTodoForm.module.css';

export const CreateTodoForm = () => {
  const toast = useToast();
  const {
    reset,
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreateTodoFormData>({
    resolver: zodResolver(createTodoFormSchema),
  });
  const [createTodo, { status }] = useCreateTodoMutation();

  const onSubmit = (data: CreateTodoFormData) => createTodo(data);

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
        toast({
          title: 'Todo created',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top',
        });

        break;
      }
    }

    reset();
  }, [status, toast, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.createTodoForm}>
      <Container>
        <Flex gap={2}>
          <Input
            type="text"
            placeholder="Title"
            {...register('title')}
            isDisabled={status === 'pending'}
          />
          <Button
            type="submit"
            colorScheme="blue"
            isDisabled={!isValid}
            isLoading={status === 'pending'}
          >
            Create
          </Button>
        </Flex>
      </Container>
    </form>
  );
};
