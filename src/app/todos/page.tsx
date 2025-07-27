import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import type { Todo } from '@/types/todo';

export const revalidate = 3600;

async function getInitialTodos(): Promise<{ todos: Todo[]; total: number }> {
    try {

        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10',
            {
                next: { revalidate: 3600 }
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }

        const todos: Todo[] = await response.json();


        const totalResponse = await fetch(
            'https://jsonplaceholder.typicode.com/todos',
            {
                next: { revalidate: 3600 }
            }
        );

        const allTodos: Todo[] = await totalResponse.json();

        return {
            todos,
            total: allTodos.length
        };
    } catch (error) {
        console.error('Error fetching initial todos:', error);
        return {
            todos: [],
            total: 0
        };
    }
}

export default async function TodosPage() {
    const { todos: initialTodos, total: initialTotal } = await getInitialTodos();

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Todo Management
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Create, manage, and track your todos with real-time updates
                </p>
            </div>

            <TodoForm />

            <TodoList
                initialTodos={initialTodos}
                initialTotal={initialTotal}
            />
        </div>
    );
}

export async function generateMetadata() {
    return {
        title: 'Todos - Todo App',
        description: 'Manage your todos with our modern, efficient todo application built with Next.js 15.',
        keywords: 'todo, task management, productivity, next.js, react',
    };
}