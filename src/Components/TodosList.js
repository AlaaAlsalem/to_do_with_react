import TodoItem from "./TodoItem";


const TodosList = (props) => {
    return (
        <div>
            <ul>{props.todos.map(todo => (

                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoPropas={props.deleteTodoProps}
                />
            ))} </ul>
        </div>
    );
}

export default TodosList;