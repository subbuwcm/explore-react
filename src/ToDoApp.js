import React, { Component } from 'react'
import RenderTodo from './components/todo/renderTodo'
import AddTodoForm from './components/todo/addTodoForm'

class ToDoAPP extends Component{

	state = {
		todos : [
			{id:1, content: 'buy milk'},
			{id:2, content:'play cricket'}
		]
	}

	deleteTodo = (todoItem) =>{
		console.log("handle delete",todoItem);
		let todos = this.state.todos.filter(todo=>{
			return todo.id != todoItem.id
		})
		this.setState({
			todos: todos
		})
	}
	handleAddTodo = (todo) =>{
		todo.id= Math.random();
        let todos = [...this.state.todos,todo];
        this.setState({
        	todos: todos
        })
	}
	render(){

		return(
			<div className="todo-app container">
				<h1 className="center blue-text"> Todos</h1>
				<RenderTodo todoItems={this.state.todos} deleteTodo={this.deleteTodo}/>
				<AddTodoForm handleAddTodo={this.handleAddTodo} />

			</div>
		);
	}

}

export default (ToDoAPP);