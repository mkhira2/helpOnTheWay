import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

var HeaderComponent = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<p className="pageTitle">Help on the Way</p>
			</div>
		)
	}
})

export default HeaderComponent