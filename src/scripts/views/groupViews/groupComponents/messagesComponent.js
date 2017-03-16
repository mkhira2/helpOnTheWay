import React from 'react'
import Backbone from 'backbone'
import SingleMessage from './singleMessageComponent'

const Messages = React.createClass({

	 _renderMessage: function(messageModel) {

	 	return <SingleMessage key={messageModel.cid} message={messageModel} />

	 },

	 render: function() {
	
	 	return (

	 		<div className='messages' >
	 			<h4>Messages</h4>
	 			<div className='list-group col-12'>
	 				{this.props.messages.map(this._renderMessage)}
	 			</div>
	 		</div>

	 	)
 	}
})

export default Messages