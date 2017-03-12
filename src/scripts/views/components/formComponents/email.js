import React from 'react'
import Backbone from 'backbone'

const EmailComponent = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label>Email Address</label>
				<input type="email" className="form-control" placeholder="Enter Email Address" />
			</div>
		)
	}
})

export default EmailComponent