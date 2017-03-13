import React from 'react'
import Backbone from 'backbone'
import HeaderComponent from './headerComponent.js'
import FooterComponent from './footerComponent.js'
import SignUpComponent from './components/signUpComponent.js'
import LoginComponent from './components/formComponents/loginComponent'

const HomePage = React.createClass({
	componentWillMount:function(){
		
	},

	render: function() {
		return (
			<div>
				<HeaderComponent />
				<div className="auth-container">
				<SignUpComponent />
				</div>
				<FooterComponent />
			</div>
		)
	}
})

export default HomePage