import React from 'react'
import Backbone from 'backbone'
import EmailComponent from './formComponents/email.js'
import SubmitComponent from './formComponents/submit.js'
import UserNameComponent from './formComponents/userName.js'
import PasswordComponent from './formComponents/password.js'

var SignUpComponent = React.createClass({
	
	render: function () {
		return(
			<div className = "SignUpComponent row container">
			
				<EmailComponent />
				<UserNameComponent />
				<PasswordComponent />
				<SubmitComponent />
				
			</div>
		)
	}
})

export default SignUpComponent 