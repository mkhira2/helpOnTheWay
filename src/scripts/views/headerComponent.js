import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import NavBarComponent from './components/navBar.js'

var HeaderComponent = React.createClass({
	
	render: function() {
		return (
			<div className="headerComponent" id = "headerComponent">
				<NavBarComponent navButtons = 
					{{"button1": {"name": "home", "link": "#home"},
					"button2": {"name": "contact", "link": "#contact"},
					"button3": {"name": "groups", "link": "#groups"}}
				}/>
			</div>
		)
	}
})

export default HeaderComponent