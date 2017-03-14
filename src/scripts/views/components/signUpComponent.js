import React from 'react'
import Backbone from 'backbone'
import ACTIONS from '../../actions.js'


var SignUpComponent = React.createClass({
	_createAction: function(evt) {
		evt.preventDefault()
		ACTIONS.createNewUser({
			email:evt.target.email.value,
			userName:evt.target.userName.value,
			password:evt.target.password.value
		})
	},
	render: function () {
	
		console.log('rendering sign in')
		return(
			<div className = "SignUpComponent col-sm-5 offset-sm-1 p-4">
				<form onSubmit={this._createAction} id="register">
					<h3>Register:</h3>
					<label className="text-muted small">Email Address</label>
					<input type="text" className="form-control py-1" name="email" placeholder="Enter Email Address" />
					<label className="text-muted small">User Name</label>
					<input placeholder="Enter User Name" type="text" name="userName" className="form-control py-1" />
					<label className="text-muted small">Password</label>
					<input type="password" className="form-control py-1" name="password" placeholder="Enter Password" />
					<button type="submit" form="register" className="btn btn-primary mt-1 col-sm-8 offset-sm-2">Submit</button>	
				</form>
			</div>
		)
		
		
	}
})

export default SignUpComponent 