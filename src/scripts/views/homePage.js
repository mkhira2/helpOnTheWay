import React from 'react'
import Backbone from 'backbone'
import HeaderComponent from './views/components/headerComponent.js'
import FooterComponent from './views/components/footerComponent.js'
import SignUpComponent from './views/components/signUpComponent.js'

const HomePage = React.createClass({
	render: {
		return(
			<form className = "homePageComponent">
				<HeaderComponent />
				<SignUpComponent />
				<FooterComponent />
			</form>
			)
	}
})

export default HomePage 