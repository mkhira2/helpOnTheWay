import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import ACTIONS from '../../actions.js'

var LoginComponent = React.createClass({
	_createAction: function(evt) {
		evt.preventDefault()
		ACTIONS.logUserIn(evt.target.emailLogin.value,evt.target.password.value)
	},

	render: function() {
		return (

			<div className="loginComponent col-sm-5 justify-content-center">
				<form onSubmit={this._createAction}>
					<h3>Login:</h3>
					<label>User Name</label>
					<input placeholder="Enter User Name" type="text" name="emailLogin" className="form-control" />
					<label>Password</label>
					<input type="password" className="form-control" name="password" placeholder="Enter Password" />
					<button className="btn btn-primary">Login</button>
				</form>
			</div>
		)
	}
})

export default LoginComponent