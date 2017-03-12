import React from 'react'
import Backbone from 'backbone'

const PasswordComponent = React.createClass({
	render: function() {
		return (
				<div className="form-group">
					<label>Password</label>
					<input type="password" className="form-control" placeholder="Enter Password" />
				</div>
			)
	}
})

export default PasswordComponent