import React from 'react'
import Backbone from 'backbone'
import MessageTextComponent from './groupViews/groupComponents/messageCreate.js'
import HeaderComponent from './headerComponent.js'
import FooterComponent from './footerComponent.js'
import ACTIONS from '../actions.js'
import STORE from '../../scripts/store'

const SingleGroupPage = React.createClass({
	componentWillMount: function(){
		ACTIONS.getMessagesByGroup(this.props.groupID)
		STORE.on('updateContent', ()=> {
			this.setState(STORE.data)
		})
	},
	getInitialState: function() {
		return STORE.data
	},
	render: function (){
		return(
			<div>
				<HeaderComponent />
				<MessageTextComponent groupID = {this.props.groupID}/>
				<Messages messages={this.state.messageCollection} />
				<FooterComponent />
			</div>
			)
	}
})

const Messages = React.createClass({
	 _renderMessage: function(messageModel) {
	 	return <Message key={messageModel.cid} message={messageModel} />
	 },
	 render: function() {
		 console.log(this)
	 	return (
	 		<div className='messages' >
	 			<h2>Messages</h2>
	 			<div className='list-group col-12'>
	 				{this.props.messages.map(this._renderMessage)}
	 			</div>
	 		</div>
	 	)
 	}
})

const Message = React.createClass({
	 render: function() {
		 console.log(this)
	 	return (
			 <div>
				<h3 className="list-group-item">Message Title: {this.props.message.get('title')}</h3>
				<p className="list-group-item">{this.props.message.get('body')}</p>
				<p className="list-group-item">Orignal Poster: {this.props.message.get('posterName')}</p>
			</div>
	 	)
 	}
})
	
//user
//58c75d954233c96620f55bcd
//group
//58c744611fe9496192bcc4e0


export default SingleGroupPage