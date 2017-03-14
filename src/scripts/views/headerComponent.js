import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import NavBarComponent from './components/navBar.js'

var HeaderComponent = React.createClass({
	
	render: function() {
		return (
			<nav className="headerComponent navbar navbar-light bg-faded navbar-toggleable-md">
				<NavBarComponent navButtons = {{
					"button1": {"name": "Home", "link": "#home"},
					"button2": {"name": "Groups", "link": "#allgroups"},
					"button3": {"name": "CreateGroup", "link": "#registergroup"},
					"button4": {"name": "logout", "link": "#logout"}
				}}/>
			</nav>
		)
	}
})

export default HeaderComponent