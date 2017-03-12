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
	getInitialState: function() {
		return {
			inputValue: ''
		}
	},
	render: function() {
		console.log(this.state.inputValue)
		return(
			<form className="groupSignupBody row">
				<h2 className='formHeader '>
				Group Signup:
				</h2>
				<form className="groupSignupForm form-group">
					<input  type='text' className='groupNameInput form-control' placeholder='Group Name'/>
					<input value={this.state.inputValue} type='text' className='groupPurposeInput form-control' placeholder='Group Purpose'/>
					<input value={this.state.inputValue} type='text' className='groupDescriptionInput form-control' placeholder='Group Description'/>
				</form>
				<button onClick={this.updateInputValue}>Submit</button>
			</form>
		)
	}
})

export default GroupSignupView