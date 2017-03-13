import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

var FooterComponent = React.createClass({
	render: function() {
		return (
			<div className="navBar">
				<a href="#home">Home</a>
				<a href="#registergroup">Groups</a>
				<a href="#contact">Contact</a>

			</div>
		)
	}
})

export default FooterComponent