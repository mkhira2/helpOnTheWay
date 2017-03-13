import React from 'react'
import Backbone from 'backbone'

const LoginButton = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<button className="btn btn-primary">Login</button>
			</div>
			)
	}

})

export default LoginButton