import React, {Component} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import PocoBallImage from '../../resources/images/pokeball.png'
import { connect } from 'react-redux'

class AEMSiteData extends Component{
	
	// not using this as we are using redux state
	state = {
		aemdata :[]
	}
	componentDidMount(){
		Axios.get('http://localhost:4503/content/we-retail/us/en.model.json')
		.then(res =>{
			console.log("wow data from AEM",res)
		})
	}

	render(){

		return(
			<div className='container home'>
				<h4 className='center'> AEM Data Test</h4>
				
			</div>
		)
	}

}

const mapStateToProps = (state) =>{
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)( AEMSiteData) 