import React from 'react'

const RenderTodo = ({todoItems,deleteTodo}) =>{
	console.log("dodos from props",{todoItems});
	const todosList = todoItems.length? (
			todoItems.map(todoItem =>{
				return(
						<div onClick={()=>deleteTodo(todoItem)} className="collection-item" key={todoItem.id}>
							<span>{todoItem.content}</span>
						</div>
					)
			})


		) : (

		<p className="center">you donot have any todos</p>
		);
	return(
		<div className="todo-items collection">
			{todosList}
		</div>
	);
}

export default RenderTodo