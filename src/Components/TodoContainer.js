import React, { Component } from "react";


class TodoContainer extends React.Component {
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };
    render(){
        return(
            <div>
                <h1> hello from create react app</h1>
                <p> I am in a react app</p>
                <ul>
      {this.state.todos.map(todo => (
        <li>{todo.title}</li>
      ))}
    </ul>
            </div>
        );
    }
}

export default TodoContainer