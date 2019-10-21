import React from 'react'

const RenderReduxTdo = ({todoItems,deleteTodo}) =>{
	console.log("dodos from props",{todoItems});
	const todosList = todoItems.length? (
			todoItems.map(todoItem =>{
				return(
						<div className="collection-item" key={todoItem.id}>
							<div>{todoItem.content}</div><button onClick={()=>deleteTodo(todoItem)} className='grey btn right'>Done</button>
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
export default RenderReduxTdo