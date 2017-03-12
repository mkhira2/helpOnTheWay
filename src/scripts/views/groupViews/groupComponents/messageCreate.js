import React from 'react'
import Backbone from 'backbone'
import FlareComponent from './groupViews/groupComponents/flare'

const MessageTextComponent = React.createClasse({
	render: function (){
		return(
			<div>
				<div className="form-group">
					<label>Enter Text</label>
					<textarea className="form-control" rows="7"></textarea>
				</div>
				<div>
				<button className="btn btn-success">Post</button> 
				<FlareComponent />
				</div>
			</div>
			)
	}

})

export default MessageTextComponent