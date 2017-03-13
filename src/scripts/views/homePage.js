import React from 'react'
import Backbone from 'backbone'
import HeaderComponent from './headerComponent.js'
import FooterComponent from './footerComponent.js'
import SignUpComponent from './components/signUpComponent.js'

const HomePage = React.createClass({
	render: function() {
		return (
			<div>
				<HeaderComponent />
				<form action="/auth/register" method="post" id="register" className = "homePageComponent">
					<SignUpComponent />
				</form>
				<FooterComponent />
			</div>
		)
	}
})

export default HomePage