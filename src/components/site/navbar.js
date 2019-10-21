import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () =>{
	return(

		<nav className='nav-wrapper red darken-3'>
			<div className="container" >
				<a className="brand-logo"> Subbu React Examples</a>
				<ul className="right">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/ninja">Ninjas</NavLink></li>
					<li><NavLink to="/todo-redux">Todo Redux</NavLink></li>
					<li><NavLink to="/todo">Todo</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar