
const initState = {
	posts:[
		{"userId": "1","id": "1","title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},
	  	{"userId": "1","id": "2","title": "qui est esse","body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},
	  	{"userId": "1","id": "3","title": "ea molestias quasi exercitationem repellat qui ipsa sit aut","body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"}
  	],
	todos:
	[
		{'id':'1','content':'buy milk'},
		{'id':'2','content':'Learn react'}
	]
}

const rootReducer = (state = initState,action) => {
	console.log('in root reducer',action);

	if( 'DELETE_POST' === action.type ){
		let newposts = state.posts.filter(post=>{ return action.id !== post.id})
		console.log('after delete post new items',newposts);
		return {
			...state,
			posts:newposts
		}

	}
	if( 'DELETE_TODO' === action.type ){
		let newtodos = state.todos.filter(todo=>{ return action.id !== todo.id})
		console.log('after delete todo  new items',newtodos);
		return {
			...state,
			todos:newtodos
		}

	}
	return state;
}

export default rootReducer