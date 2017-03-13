import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

var LoginComponent = React.createClass({
	
	render: function() {
		return (

			<div className="loginComponent" id = "loginComponent">
				<form>
					<h2>Login:</h2>
					<label>User Name</label>
					<input placeholder="Enter User Name" type="text" name="userName" className="form-control" />
					<label>Password</label>
					<input type="password" className="form-control" name="password" placeholder="Enter Password" />
					<button className="btn btn-primary">Login</button>
				</form>
			</div>
		)
	}
})

export default LoginComponent