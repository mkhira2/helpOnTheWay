import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from '../init'

//<Banner /> goes in 
//setting empty strings to store form inputs
var inputObj = {}



//setting up structure for the page, banner is a placeholder for the banner used by the rest of the site
//GroupSignupForm is defined below
var GroupSignupView = React.createClass({
	render: function() {
		return(
			<div className='body'>
				<GroupSignupForm />
			</div>
		)
	}
})

//sets up the layout of the mhp submission form
var GroupSignupForm = React.createClass({
	submitData: function(ev) {
		
	},
	render: function() {
		return(
			<div className="groupSignupBody">
				<h2 className='formHeader'>
				Group Signup:
				</h2>
				<form className="groupSignupForm">
					<input type='text' className='groupNameInput' placeholder='Group Name'/>
					<input type='text' className='groupPurposeInput' placeholder='Group Purpose'/>
					<input type='text' className='groupDescriptionInput' placeholder='Group Description'/>
					<button className='submitButton' onClick={this.submitData}>Submit</button>
				</form>
			</div>
		)
	}
})

export default GroupSignupView