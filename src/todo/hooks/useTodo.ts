import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";


export const useTodo = () => {

    const { todoState, toggleTodo } = useContext(TodoContext);
    const { todos } = todoState;

    return {
        todos,
        pendingTodos: todos.filter(t => !t.completed),
        toggleTodo
    }

};
