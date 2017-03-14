import React from 'react'
import Backbone from 'backbone'
import FlareComponent from './flare'
var allPosts = []

var WriteMessageComponent = React.createClass({
	
	_addToPosts: function(){
		console.log('added message')
		//allPosts.push(this) 
		//console.log(allPosts)
	},

	render: function(){
		return(
			<div>
				<div className="form-group">
					<label>Enter Text</label>
					<textarea className="form-control" rows="7"></textarea>
				</div>
				<div className="form-inline">
				<button className="btn btn-success" onClick={this._addToPosts()}>Post</button> 
				<FlareComponent />
				</div>
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