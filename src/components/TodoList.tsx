'use client';

import { useState } from 'react';
import { useGetTodosQuery, useUpdateTodoMutation, useDeleteTodoMutation } from '@/store/api/todoApi';
import Pagination from './Pagination';
import type { Todo } from '@/types/todo';

interface TodoListProps {
    initialTodos?: Todo[];
    initialTotal?: number;
}

export default function TodoList({ initialTodos = [], initialTotal = 200 }: TodoListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const start = (currentPage - 1) * itemsPerPage;

    const {
        data: todos = initialTodos,
        error,
        isLoading,
        refetch
    } = useGetTodosQuery(
        { start, limit: itemsPerPage },
        {
            // Skip if we have initial data for the first page
            skip: currentPage === 1 && initialTodos.length > 0,
        }
    );

    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const handleToggleComplete = async (todo: Todo) => {
        try {
            await updateTodo({
                id: todo.id,
                completed: !todo.completed,
            }).unwrap();
        } catch (error) {
            console.error('Failed to update todo:', error);
            alert('Failed to update todo. Please try again.');
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this todo?')) return;

        try {
            await deleteTodo(id).unwrap();
            alert('Todo deleted successfully!');
        } catch (error) {
            console.error('Failed to delete todo:', error);
            alert('Failed to delete todo. Please try again.');
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                            Error loading todos
                        </h3>
                        <div className="mt-2">
                            <button
                                onClick={() => refetch()}
                                className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded hover:bg-red-200"
                            >
                                Try again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Todo List
                        {isLoading && (
                            <span className="ml-2 inline-flex items-center">
                                <svg className="animate-spin h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span className="ml-1 text-sm text-gray-500">Loading...</span>
                            </span>
                        )}
                    </h2>
                </div>

                {todos.length === 0 && !isLoading ? (
                    <div className="px-6 py-8 text-center">
                        <div className="text-gray-500">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-gray-900">No todos</h3>
                            <p className="mt-1 text-sm text-gray-500">Get started by creating a new todo.</p>
                        </div>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-200">
                        {todos.map((todo) => (
                            <div key={todo.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={() => handleToggleComplete(todo)}
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <div className="flex-1">
                                            <p className={`text-sm font-medium ${todo.completed
                                                ? 'text-gray-500 line-through'
                                                : 'text-gray-900'
                                                }`}>
                                                {todo.title}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                ID: {todo.id} | User: {todo.userId}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${todo.completed
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {todo.completed ? 'Completed' : 'Pending'}
                                        </span>

                                        <button
                                            onClick={() => handleDelete(todo.id)}
                                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Pagination
                currentPage={currentPage}
                totalItems={initialTotal}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}