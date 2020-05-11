import React, {Component} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import PocoBallImage from '../../resources/images/pokeball.png'
import { connect } from 'react-redux'
import AEMSiteData from './aemsite.js'
class Home extends Component{
	/*
	// not using this as we are using redux state
	state = {
		posts :[]
	}
	componentDidMount(){
		Axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res =>{
			console.log(res.data.slice(0,10))
			this.setState({
				posts : res.data
			})
		})
	}*/

	render(){
		const {posts} = this.props;
		const postList = posts.length? (
			posts.map(post =>{
				return(
					<div className='post card' key={post.id}>
						<img src={PocoBallImage} alt="subbu"/>
						<div className='card-content'>
							<Link to={'/'+ post.id}>
								<span className='card-title red-text'>{post.title}</span>
							</Link>
							<p>{post.body}</p>
						</div>
					</div>
				)
			})

		) : (
				<div className='center' > No post avalible</div>
			)

		return(
			<div className='container home'>
				<h4 className='center'> Home</h4>
				{postList}
				<AEMSiteData/>
			</div>
		)
	}

}

const mapStateToProps = (state) =>{
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)( Home) 