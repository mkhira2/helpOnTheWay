import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import EmailComponent from './email.js'
import SubmitComponent from './submit.js'
import UserNameComponent from './userName.js'
import PasswordComponent from './password.js'
import LoginButton from './loginButton.js'

var LoginComponent = React.createClass({
	
	render: function() {
		return (

			<div className="loginComponent" id = "loginComponent">
				<h3>Login:</h3>
				<UserNameComponent />
				<PasswordComponent />
				<LoginButton />
		
			</div>
		)
	}
})

export default LoginComponent