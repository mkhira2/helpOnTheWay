import React from 'react'
import Backbone from 'backbone'
import MessageTextComponent from './groupViews/groupComponents/messageCreate'

const SingleGroupView = React.creatClass({
	render: function (){
		return(
			<div>\
				<MessageComponent />
			</div>
			)
	}
})

export default SingleGroupView