import React,  {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from './components/site/navbar'
import Home from './components/site/home'
import NinjaApp from './NinjaApp';
import TodoApp from './ToDoApp'
import TodoReduxApp from './TodoReduxApp'
import Contact from './components/site/contact'
import About from './components/site/about'

import RenderPost from './components/site/renderpost'

class App extends Component{
	render(){
		return(
			<BrowserRouter>
				<div className="app">
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/ninja" component={NinjaApp} />
						<Route path="/todo" component={TodoApp} />
						<Route path="/todo-redux" component={TodoReduxApp} />
						<Route path="/contact" component={Contact} />
						<Route path="/About" component={About} />
						<Route path="/:post_id" component={RenderPost} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}
export default App