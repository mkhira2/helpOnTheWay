import React from 'react'
import Backbone from 'backbone'
import EmailComponent from './views/components/formComponents/email.js'
import SubmitComponent from './views/components/formComponents/submit.js'
import UserNameComponent from './views/components/formComponents/userName.js'
import PasswordComponent from './views/components/formComponents/password.js'

var SignUpComponent = React.createClass({
	render: function () {

		return(
			<div className = "SignUpComponent">
			
				<EmailComponent />
				<UserNameComponent />
				<PasswordComponent />
				<SubmitComponent />
				
			</div>
		)
	}
})

export default SignUpComponent 