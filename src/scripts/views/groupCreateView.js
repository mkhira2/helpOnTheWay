import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from '../init'
import HeaderComponent from './headerComponent'
import FooterComponent from './footerComponent'
import ACTIONS from '../actions.js'
var inputObj = {}



//setting up structure for the page, banner is a placeholder for the banner used by the rest of the site
//GroupSignupForm is defined below
var GroupSignUpView = React.createClass({
	render: function() {
		return(
			<div className='body container-fluid'>
				<HeaderComponent />
				<GroupSignupForm />
				<FooterComponent />
			</div>
		)
	}
})

//sets up the layout of the mhp submission form
var GroupSignupForm = React.createClass({
	createAction:function(evt){
		evt.preventDefault()
		ACTIONS.createNewGroup({
			name:evt.target.name.value,
			description:evt.target.description.value,
			purpose:evt.target.purpose.value
		})
	},
	
	render: function() {
		return(
			<div className="groupSignupBody container my-4">
				<h2 className="formHeader text-center">
				Group Signup
				</h2>
				<form className="groupSignupForm form-group" id="createGroup" onSubmit={this.createAction} method="post">
					<input  name="name" type='text' className='groupNameInput form-control mt-1' placeholder='Group Name'/>
					<input  name="purpose" type='text' className='groupPurposeInput form-control mt-1' placeholder='Group Purpose'/>
					<input  name="description" type='text' className='groupDescriptionInput form-control mt-1' placeholder='Group Description'/>
					<button type="submit" value="Submit" form="createGroup" className="btn offset-sm-3 col-sm-6 my-1" id="registerButton">Submit</button>
				</form>
			</div>
		)
	}
})

export default GroupSignUpView