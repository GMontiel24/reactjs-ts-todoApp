// import { useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import { useTodo } from "../hooks/useTodo";
import { Todo } from "../interfaces/interfaces";

interface TodoItemProps {
    todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {

    // const { toggleTodo } = useContext(TodoContext);

    // const handleDoubleClick = () => {
    //     toggleTodo(todo.id);
    // }
    const { toggleTodo } = useTodo();

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }}
            onDoubleClick={() => toggleTodo(todo.id)}>
            {todo.desc}
        </li>
    );
};
