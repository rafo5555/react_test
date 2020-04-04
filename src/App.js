import React from "react";
import Todos from './Todos';
import AddForm from './AddForm';

class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario game'}
    ]
  };

  deleteTodo(id){
    const toodList = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: toodList});
  }

  addTodo(newTodo){
    const todoList = [... this.state.todos, newTodo];
    this.setState({todos: todoList});
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)}/>
        <AddForm addTodo={this.addTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
