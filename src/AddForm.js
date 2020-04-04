import React from "react";

class AddForm extends React.Component{
    state = {
        newTodo: { content: ''}
    };

    handleOnChange(e){
       this.setState({
         newTodo: {
            [e.target.name]: e.target.value,
            id: Math.random() * 100
         }
       });
    }

    handleOnSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: {content: ''}})
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <label>Add new todo</label>
                    <input type="text" name="content" onChange={this.handleOnChange.bind(this)} value={this.state.newTodo.content}/>
                    <button>Add New Todo</button>
                </form>
            </div>
        );
    }
}

export default AddForm;