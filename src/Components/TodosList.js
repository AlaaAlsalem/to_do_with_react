const TodosList = (props) =>{
    return(
        <div>
            <h1>{props.todos.map(todo =>(
                <ul>
                <li>{todo.title}</li>
                <li>{todo.id}</li>
                </ul>
            ))} </h1>
        </div>
    );
}

export default TodosList;