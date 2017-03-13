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
		console.log('making the login component')
		return (

			<div className="loginComponent" id = "loginComponent">
				<h2>Login:</h2>
				<UserNameComponent />
				<PasswordComponent />
				<LoginButton />
		
			</div>
		)
	}
})

export default LoginComponent