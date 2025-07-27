'use client';

import { useState } from 'react';
import { useCreateTodoMutation } from '@/store/api/todoApi';

export default function TodoForm() {
    const [title, setTitle] = useState('');
    const [createTodo, { isLoading }] = useCreateTodoMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        try {
            await createTodo({
                userId: 1,
                title: title.trim(),
                completed: false,
            }).unwrap();

            setTitle('');
            alert('Todo created successfully!');
        } catch (error) {
            console.error('Failed to create todo:', error);
            alert('Failed to create todo. Please try again.');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Add New Todo
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Todo Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your todo..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
                        disabled={isLoading}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading || !title.trim()}
                    className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {isLoading ? 'Creating...' : 'Add Todo'}
                </button>
            </form>
        </div>
    );
}