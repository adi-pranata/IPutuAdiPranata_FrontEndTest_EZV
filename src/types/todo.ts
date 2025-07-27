export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface CreateTodoRequest {
    userId: number;
    title: string;
    completed: boolean;
}

export interface TodosResponse {
    todos: Todo[];
    total: number;
}

export interface PaginationParams {
    start: number;
    limit: number;
}