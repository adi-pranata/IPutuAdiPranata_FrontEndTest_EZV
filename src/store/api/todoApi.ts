import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Todo, CreateTodoRequest, PaginationParams } from '@/types/todo';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], PaginationParams>({
            query: ({ start, limit }) => `todos?_start=${start}&_limit=${limit}`,
            providesTags: ['Todo'],
        }),
        getAllTodos: builder.query<Todo[], void>({
            query: () => 'todos',
            providesTags: ['Todo'],
        }),
        createTodo: builder.mutation<Todo, CreateTodoRequest>({
            query: (newTodo) => ({
                url: 'todos',
                method: 'POST',
                body: newTodo,
            }),
            invalidatesTags: ['Todo'],
        }),
        updateTodo: builder.mutation<Todo, Partial<Todo> & Pick<Todo, 'id'>>({
            query: ({ id, ...patch }) => ({
                url: `todos/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: ['Todo'],
        }),
        deleteTodo: builder.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todo'],
        }),
    }),
});

export const {
    useGetTodosQuery,
    useGetAllTodosQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todosApi;