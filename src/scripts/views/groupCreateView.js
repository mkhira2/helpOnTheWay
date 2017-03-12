import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from '../init'
import HeaderComponent from './headerComponent'
import FooterComponent from './footerComponent'
//<Banner /> goes in 
//setting empty strings to store form inputs
var inputObj = {}



//setting up structure for the page, banner is a placeholder for the banner used by the rest of the site
//GroupSignupForm is defined below
var GroupSignUpView = React.createClass({
	render: function() {
		return(
			<div className='body container'>
				<HeaderComponent />
				<GroupSignupForm />
				<FooterComponent />
			</div>
		)
	}
})

//sets up the layout of the mhp submission form
var GroupSignupForm = React.createClass({
	getInitialState: function() {
		return {
			inputValue: ''
		}
	},
	render: function() {
		console.log(this.state.inputValue)
		return(
			<div className="groupSignupBody">
				<h2 className="formHeader text-center">
				Group Signup
				</h2>
				<form className="groupSignupForm form-group">
					<input  type='text' className='groupNameInput form-control mt-1' placeholder='Group Name'/>
					<input value={this.state.inputValue} type='text' className='groupPurposeInput form-control mt-1' placeholder='Group Purpose'/>
					<input value={this.state.inputValue} type='text' className='groupDescriptionInput form-control mt-1' placeholder='Group Description'/>
				</form>
				<button className="btn btn-primary" onClick={this.updateInputValue}>Submit</button>
			</div>
		)
	}
})

export default GroupSignUpView