import React from 'react'
import Backbone from 'backbone'
import HeaderComponent from './components/headerComponent.js'
import FooterComponent from './components/footerComponent.js'
import SignUpComponent from './components/signUpComponent.js'

const HomePage = React.createClass({
	render: function() {
		return (
			<form className = "homePageComponent">
				<HeaderComponent />
				<SignUpComponent />
				<FooterComponent />
			</form>
		)
	}
})

export default HomePage