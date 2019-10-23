import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {deletePostAction } from '../../actions/dispatchActions'

class RenderPost extends Component{

	/*
	Since we are using state from redux commented this
	state = {
		post: null
	}
	componentDidMount(){
		console.log(this.props);
		let id = this.props.match.params.post_id;
		Axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
		.then(res =>{
			this.setState({
				post : res.data
			})
			console.log("state of post render ", this.state)
		})

	}*/
	handleDeletePost = () =>{
		this.props.deletePost(this.props.post.id)
		this.props.history.push('/')
		console.log("props in handleDeletePost  : ",this.props)
	}

	render(){
		console.log("render post",this.props)
		const post = this.props.post ? (
				<div className='post'>
					<h4 className='center'>{this.props.post.title}</h4>
					<p>{this.props.post.body}</p>
					<div className='center'>
						<Link to='/'><button className='btn orange'>Back to Home</button></Link>
						<button className='btn grey' onClick={this.handleDeletePost}>Delete Post</button>
					</div>

				</div>
			) : (
				<div className='center'>Looading post .....</div>
			)


		return(
			<div className='container'>
				{post}
			</div>
		)
	}
}
const mapStateToProps = (state,ownProps) => {
	let id = ownProps.match.params.post_id;
	return {
		post: state.posts.find(post => post.id === id) 
	}
}
const mapDispatchToProps = (dispatch) =>{

	return{
		deletePost: (id) =>{
			console.log('in delete post'+id);
			dispatch(deletePostAction(id))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(RenderPost)