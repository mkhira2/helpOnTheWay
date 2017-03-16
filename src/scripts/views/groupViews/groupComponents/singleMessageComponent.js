import React from 'react'
import Backbone from 'backbone'

const SingleMessage = React.createClass({

	 render: function() {
		
	 	return (

			<div>
				<h3 className="list-group-item">{this.props.message.get('title')}</h3>
				<p className="list-group-item lead">{this.props.message.get('body')}</p>
				<p className="list-group-item small">Posted By: {this.props.message.get('posterName')}</p>
			</div>

	 	)
 	}
})

export default SingleMessage