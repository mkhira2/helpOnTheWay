import React from 'react'
import Backbone from 'backbone'
import MessageTextComponent from './groupComponents/messageCreate'
import HeaderComponent from '../headerComponent.js'
import FooterComponent from '../footerComponent.js'

//MOBX Imports
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import {action} from 'mobx-react'

const SingleGroupView = React.createClass({ 
	render: function (){
		
		return(

			<div>
				<HeaderComponent />
				<MessageTextComponent />
				<FooterComponent />
			</div>
			)
	}
})

export default SingleGroupView