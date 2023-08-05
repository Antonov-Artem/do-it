import { TODO_TAG, baseApi } from 'shared/api';
import { Todo } from '../model/types';
import {
  GetAllTodosArgs,
  CreateTodoDto,
  UpdateTodoTitleArgs,
  UpdateTodoStatusArgs,
} from './types';

const todoApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getTodos: build.query<Todo[], GetAllTodosArgs>({
      query: params => ({
        url: '/',
        params,
      }),
      providesTags: [TODO_TAG],
    }),
    getTodoById: build.query<Todo, number>({
      query: id => ({
        url: `/${id}`,
      }),
    }),
    createTodo: build.mutation<Todo, CreateTodoDto>({
      query: dto => ({
        url: '/',
        method: 'POST',
        body: { title: dto.title, completed: false },
      }),
      invalidatesTags: [TODO_TAG],
    }),
    updateTodoTitle: build.mutation<Todo, UpdateTodoTitleArgs>({
      query: ({ id, title }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: { title },
      }),
      invalidatesTags: [TODO_TAG],
    }),
    updateTodoStatus: build.mutation<Todo, UpdateTodoStatusArgs>({
      query: ({ id, completed }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: { completed },
      }),
      invalidatesTags: [TODO_TAG],
    }),
    deleteTodo: build.mutation<Todo, number>({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TODO_TAG],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoTitleMutation,
  useUpdateTodoStatusMutation,
} = todoApi;
