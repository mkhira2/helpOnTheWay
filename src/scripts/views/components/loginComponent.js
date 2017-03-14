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

			<div className="loginComponent col-sm-5 offset-sm-1 p-4 ml-0">
				<form onSubmit={this._createAction}>
					<h3>Login:</h3>
					<label className="text-muted small">User Name</label>
					<input placeholder="Enter User Name" type="text" name="emailLogin" className="form-control py-1" />
					<label className="text-muted small">Password</label>
					<input type="password" className="form-control py-1" name="password" placeholder="Enter Password" />
					<button className="btn btn-success mt-1 col-sm-8 offset-sm-2">Login</button>
				</form>
			</div>
		)
	}
})
// justify-content-center
export default LoginComponent