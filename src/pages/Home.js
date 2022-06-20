import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "../pages/Home.css";

class Home extends Component {
  // Create a default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {

    todo.id = Math.random();
    //duplicate element exits
    /*const duplicateTodoExists = this.state.todos.find((element) => {
      return element.state.content === todo.state.content;
    //console.log('found a duplicate'); 
    }); */

    if (this.state.todos.find(element => element.content === todo.content)) {
      return;
    } else {
      let new_list = [...this.state.todos, todo];
      // Update the local state with the new array.
      this.setState({
        todos: new_list,
      });
    }
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
};

  render() {
    return (
      <div className="Home">
        <h1>Todo's </h1>
        {/* When passing the AddTodo component, addTodo is a prop that is used in the 
        AddTodo.js file when handling the submit */}
        <AddTodo addTodo={this.addTodo} />
        {/* When returning the Todos component, todos is a prop passed to the todos.js file
         to format and render the current todo list state */}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Home;
