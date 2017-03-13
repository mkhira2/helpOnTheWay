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
<<<<<<< HEAD
					
						<SignUpComponent />
						<LoginComponent />
		
				
=======
				<SignUpComponent />
>>>>>>> 606ae301963c0afdb7a3d230bf1ac2cfdf890539
				</div>
				<FooterComponent />
			</div>
		)
	}
})

export default HomePage