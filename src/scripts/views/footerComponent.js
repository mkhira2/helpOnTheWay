import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

var FooterComponent = React.createClass({
	render: function() {
		return (
			<footer className="footer sticky-bottom navbar navbar-light mt-1 mr-1 bg-faded navbar-toggleable-md" id="navbar">
				<ul className="navbar-nav mx-2 mr-auto">
					<li className = "nav-item mx-2">
						<a href="#home" className="nav-link">Home</a>
					</li>
					<li className = "nav-item mx-2">
						<a href="#registergroup" className="nav-link">Register Your Group</a>
					</li>
					<li className = "nav-item mx-2">
						<a href="#allgroups" className="nav-link">Groups</a>
					</li>
					<li className = "nav-item mx-2">
						<a href="#contact" className="nav-link">Contact</a>
					</li>
				</ul>

			</footer>
		)
	}
})

export default FooterComponent