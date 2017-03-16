import React from 'react'
import Backbone from 'backbone'
import FlareComponent from './flare'
import ACTIONS from '../../../actions.js'
import STORE from '../../../store'

const MessageTextComponent = React.createClass({
	
	_createAction:function(evt){
		evt.preventDefault()
		ACTIONS.createNewMessage({
			groupID:this.props.groupID,
			title:evt.target.title.value,
			description:evt.target.description.value,
			body:evt.target.body.value
		})
		if(STORE.data.flare){
			ACTIONS.sendEmailToAllMembers({
				groupID:this.props.groupID,
				title:evt.target.title.value,
				description:evt.target.description.value,
				body:evt.target.body.value
			},this.props.groupID)
			STORE.data.flare = false
		}
		window.scrollTo(0,document.body.scrollHeight);
		evt.target.title.value =''
		evt.target.description.value=''
		evt.target.body.value=''
	},
	handleFlare:function(evt) {
		STORE.data.flare = true
	},

	render: function (){
		return(
			<div>
				<form onSubmit={this._createAction} id="newMessage">
					<h4>Post New Message:</h4>
					<label>Title</label>
					<input type="text" className="form-control" name="title" placeholder="Enter Title" />
					<label>Description</label>
					<input placeholder="Enter Description" type="text" name="description" className="form-control" />
					<label>Body</label>
					<textarea type="textarea" className="form-control" name="body" placeholder="Enter Body" ></textarea>
					<div className= "row">
					<button type="submit" form="newMessage" className="btn btn-primary col-sm-3 submit offset-sm-2 my-1">Submit</button>	
					<button onClick= {this.handleFlare} form="newMessage" name="flare" className="btn btn-danger col-sm-3 offset-sm-2 my-1">S.O.S.</button>
					</div>
				</form>
			</div>
			)
	}

})

export default MessageTextComponent