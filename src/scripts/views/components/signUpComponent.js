import React from 'react'
import Backbone from 'backbone'
import ACTIONS from '../../actions.js'


var SignUpComponent = React.createClass({
	_createAction: function(evt) {
		evt.preventDefault()
		console.log(evt.target.email.value)
	},
	render: function () {
		return(
			<div className = "SignUpComponent container">
				<form id="register" onSubmit={this._createAction}>
					<h3>Register:</h3>
					<label>Email Address</label>
					<input type="text" className="form-control" name="email" placeholder="Enter Email Address" />
					<label>User Name</label>
					<input placeholder="Enter User Name" type="text" name="userName" className="form-control" />
					<label>Password</label>
					<input type="password" className="form-control" name="password" placeholder="Enter Password" />
					<button type="submit" form="register" className="btn btn-primary">Submit</button>	
				</form>
			</div>
		)
	}
})

export default SignUpComponent 