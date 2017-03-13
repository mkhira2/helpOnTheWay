import React from 'react'
import Backbone from 'backbone'

const EmailComponent = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label>Email Address</label>
				<input type="text" className="form-control" name="email" placeholder="Enter Email Address" />
			</div>
		)
	}
})

export default EmailComponent