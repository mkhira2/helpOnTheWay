import React from 'react'
import Backbone from 'backbone'
import HeaderComponent from './headerComponent.js'
import FooterComponent from './footerComponent.js'
import SignUpComponent from './components/signUpComponent.js'
import LoginComponent from './components/formComponents/loginComponent.js'

const HomePage = React.createClass({
	
	render: function() {
		return (
			<form className = "homePageComponent">
				<HeaderComponent />
				<SignUpComponent />
				<LoginComponent />
				<FooterComponent />
			</form>
		)
	}
})

export default HomePage