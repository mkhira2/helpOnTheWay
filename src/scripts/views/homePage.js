import React from 'react'
import Backbone from 'backbone'
import HeaderComponent from './headerComponent.js'
import FooterComponent from './footerComponent.js'
import SignUpComponent from './components/signUpComponent.js'
import LoginComponent from './components/loginComponent.js'
import STORE from './../store.js'

//renders homepage view
const HomePage = React.createClass({

	//do something just before the component will mount
	componentWillMount:function(){
		
		
	},

	//render's the homepage 
	//add's signup and login component if the user is not logged in
	render: function() {
		console.log(STORE.data.loggedIn)
		return (
			<div className="container-fluid">
				<HeaderComponent />
				<div className="auth-container row">
					<SignUpComponent loggedIn = {STORE.data.loggedIn}/>
					<LoginComponent loggedIn = {STORE.data.loggedIn}/>
				</div>
				<FooterComponent />
			</div>
		)
	},

	//when the component has mounted, set the state to rerender the component
	componentDidMount:function(){
		
		//listens for a change on the store, sets this component to re-render with new info
		STORE.on('updateContent', () => {
			this.setState(STORE.data)
		})
		
	}
})

export default HomePage