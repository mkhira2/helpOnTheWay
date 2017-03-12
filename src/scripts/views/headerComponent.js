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
					"button2": {"name": "about", "link": "#about"},
					"button3": {"name": "contact", "link": "#contact"},
					"button4": {"name": "blog", "link": "#blog"}}
				}/>
			</div>
		)
	}
})

export default HeaderComponent