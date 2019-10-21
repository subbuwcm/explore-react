import React, { Component } from 'react'
import {connect} from 'react-redux'
import { deleteTodoAction } from './actions/dispatchActions'
import RenderTodoRedux from './components/todo/renderreduxtodo'


class TodoReduxApp extends Component {

handleTodoDelete = ( todo ) =>{
		console.log("calling handleTodoDelete in reduxTood App");
		this.props.deleteTodo(todo.id);
}

render(){
	
	let todos = this.props.todos;
	console.log(todos);
	return(
		<div className='container todos-redux'>
			<h1 className="center blue-text">Todos</h1>
			<RenderTodoRedux todoItems={this.props.todos} deleteTodo={this.handleTodoDelete}/>
		</div>
	)
}

}

const mapStateToProps = (state) =>{

	return{
		todos : state.todos
	}
}

const mapDispatchToProps = (dispatch) =>{

	
	return{
		deleteTodo: (id) =>{
			console.log('in delete todo '+id);
			dispatch(deleteTodoAction(id))
		}
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoReduxApp)