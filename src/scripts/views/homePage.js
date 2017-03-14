import React from 'react'
import Backbone from 'backbone'
import HeaderComponent from './headerComponent.js'
import FooterComponent from './footerComponent.js'
import SignUpComponent from './components/signUpComponent.js'
import LoginComponent from './components/loginComponent.js'
import STORE from './../store.js'

const HomePage = React.createClass({
	componentWillMount:function(){
		
	},

	render: function() {
		console.log(STORE.data.loggedIn)
		return (
			<div className="container">
				<HeaderComponent />
				<div className="auth-container row">
					<SignUpComponent loggedIn = {STORE.data.loggedIn}/>
					<LoginComponent loggedIn = {STORE.data.loggedIn}/>
				</div>
				<FooterComponent />
			</div>
		)
	}
})

export default HomePage