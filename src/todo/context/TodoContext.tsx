import { createContext } from 'react';
import { TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
    todoState: TodoState;
    toggleTodo: (id: string) => void;
}

// {} as TodoContextProps establece como objeto vacio de tipo TodoContextProps

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);