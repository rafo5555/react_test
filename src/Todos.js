import React from 'react';

class Todos extends React.Component{
    render(){
        const todoList = this.props.todos.length
        ? (this.props.todos.map(todo => {
            return (<div className="collection-item" key={todo.id} onClick={() => {this.props.deleteTodo(todo.id)}}>
                <span>{todo.content}</span>
            </div>)
        }))
        : (<p className="center">You have no Todo's left</p>);
        return (
            <div className="todos collection">{todoList}</div>
        )
    }
}

export default Todos;