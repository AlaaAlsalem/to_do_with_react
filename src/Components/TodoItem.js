import React from 'react';


const TodoItem = (props) => {
    const hand = () =>{
       return  props.deleteTodoPropas(props.todo.id)
    }

    return (

        <li>
            <input type="checkbox" checked={props.todo.completed}
                onChange={() => props.handleChangeProps(props.todo.id)}
            />
            <button onClick={hand}>
                Delete
            </button>                    {props.todo.title} </li>

    );

}

export default TodoItem