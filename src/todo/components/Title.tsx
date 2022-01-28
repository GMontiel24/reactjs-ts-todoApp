import { useTodo } from '../hooks/useTodo';

export const Title = () => {

    const { pendingTodos } = useTodo();

    return (
        <h1>
            Todos: {pendingTodos.length}
        </h1>
    );
};
