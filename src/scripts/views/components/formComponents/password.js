import React from 'react'
import Backbone from 'backbone'

const PasswordComponent = React.createClass({
	render: function() {
		return (
				<div className="form-group">
					<label>Password</label>
					<input className="form-control" placeholder="password" />
				</div>
			)
	}
})

export default PasswordComponent