export const deletePostAction = (id) =>{
	return {
		type: 'DELETE_POST',
		id
	}
}

export const deleteTodoAction = (id) =>{
	return {
		type: 'DELETE_TODO',
		id
	}
}
