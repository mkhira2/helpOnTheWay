import React from 'react'
import Backbone from 'backbone'
import FlareComponent from './flare'
import ACTIONS from '../../../actions.js'

const MessageTextComponent = React.createClass({
	_createAction:function(evt){
		evt.preventDefault()
		ACTIONS.createNewMessage({
			groupID:this.props.groupID,
			title:evt.target.title.value,
			description:evt.target.description.value,
			body:evt.target.body.value
		})
	},

	render: function (){
		console.log(this)
		return(
			<div>
				<form onSubmit={this._createAction} id="newMessage">
					<h3>Post New Message:</h3>
					<label>Title</label>
					<input type="text" className="form-control" name="title" placeholder="Enter Title" />
					<label>Description</label>
					<input placeholder="Enter Description" type="text" name="description" className="form-control" />
					<label>Body</label>
					<textarea type="textarea" className="form-control" name="body" placeholder="Enter Body" ></textarea>
					<button type="submit" form="newMessage" className="btn btn-primary">Submit</button>	
				</form>
				<FlareComponent />
			</div>
			)
	}

})

var AllMessagesComponent = React.createClass({
	
	render: function(){
		
		return(

			<div className="allPosts">
				{this.props.messagesArray}
			</div>
		)
	}
})

export default WriteMessageComponent