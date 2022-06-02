import TodoItem from './TodoItem';

const TodosList = (props) => (
  <div>
    <ul>
      {props.todos.map((todo) => (

        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
      {' '}

    </ul>
  </div>
);

export default TodosList;
