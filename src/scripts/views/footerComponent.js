import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

var FooterComponent = React.createClass({
	render: function() {
		return (
			<div className="navBar">
				<a href="#home">Home</a>
				<a href="#groups">Groups</a>
				<a href="#home">Contact</a>

			</div>
		)
	}
})

export default FooterComponent