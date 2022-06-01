import React from 'react';
import styles from "./TodoItem.module.css"



const TodoItem = (props) => {
    const hand = () => {
        return props.deleteTodoPropas(props.todo.id)
    }

    const completedStyle  = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through"
    }
    return (

        <li className={styles.item}>
            <input
                type="checkbox"
                checked={props.todo.completed}
                className={styles.checkbox}
                onChange={() => props.handleChangeProps(props.todo.id)}
            />
            <button onClick={hand}>
                Delete
            </button>
            <span style={props.todo.completed ? completedStyle : null}/>

            {props.todo.title} </li>

    );

}

export default TodoItem