import React from 'react'
import Backbone from 'backbone'
import PostHistoryComponent from './groupViews/groupComponents/postHistory'
import MessageComponent from './groupViews/groupComponents/messageCreate'
import HeaderComponent from './headercomponet'
import FooterComponent from './footercomponet'

const SingleGroupView = React.creatClass({
	render: function (){
		return(
			<div>\
				<HeaderComponent />
				<MessageComponent />
				<FooterComponent />
			</div>
			)
	}
})

export default SingleGroupView