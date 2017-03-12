import React from 'react'
import Backbone from 'backbone'

const EmailComponent = React.createClass(){
	render: {
		return
		(
			<div className = "form-group">
				<label htmlFor = "emailInput">Email Adress</label>
				<input type="email" className="form-control" placeholder="Enter email" />
			</div>
			)
	}
}

export default EmailComponent