import React, { Component } from "react";

class InputTodo extends Component {
    state={
        title:"hello from tiltee "
    };
    onChange =e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = e=>{
        e.preventDefault();
        if(this.state.title.trim()){
        this.props.addTodoProps(this.state.title)
        this.setState({
            title:''
        })}
        else{
            alert('please enter a title :)')
        }
    }
    render (){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder ="Add a text ..."
                name="title" 
                value={this.state.title} onChange={this.onChange}/>
                <button>Submit</button>
            </form>
        );
    }
}

export default InputTodo;