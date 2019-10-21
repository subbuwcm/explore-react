import React,{Component} from 'react'

class AddTodoForm extends Component{

	state = {
		content: ""
	}
	handleTodoChange = (e) =>{
		console.log(e.target.value);
		this.setState({
			content : e.target.value
		})
	}
	handleSubmit = (e)=>{
		e.preventDefault();
		this.props.handleAddTodo(this.state)
		this.setState({
			content: ''
		})
	}

	render(){
		return(
			<div className="add-todo-form-container">
				<form onSubmit={this.handleSubmit}>
					<label>Add item</label>
					<input type="text" name="todoContent" value={this.state.content} onChange={this.handleTodoChange} />
				</form>
			</div>

		)
	}

		

}

export default AddTodoForm