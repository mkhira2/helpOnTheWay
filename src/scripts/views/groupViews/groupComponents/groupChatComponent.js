import React from 'react'
import Backbone from 'backbone'
import MessageTextComponent from './messageCreate'
import MessagesComponent from './messagesComponent.js'
import STORE from "../../../store"

var GroupChatComponent = React.createClass({

	componentWillMount: function(){
		
	},
	getInitialState: function() {
		return (STORE.data)
	},
	render: function(){

		if(this.props.loggedIn === true){

			return(

				<div className = "groupChatContainer" id="groupChat">

					<div className = "groupChatHeader">
						<h2>Messages - Current Group</h2>
					</div>

					<div className = "groupChatBody">
						<MessagesComponent messages={this.state.messageCollection}/>
					</div>

				</div>

			)

		}

		else{

			return(
				null
			)
		}

	},

	componentDidMount: function(){

		ACTIONS.getMessagesByGroup(this.props.groupID)
		STORE.on('updateContent', ()=> {
			this.setState(STORE.data)
		})
	}
})

export default GroupChatComponent