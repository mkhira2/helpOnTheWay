import React from 'react'
import Backone from 'backbone'

const UserNameComponent = React.createClass({
	render: function() {
		return (
		<div className="form-group">
			<input placeholder="User Name" className="form-control" />
		</div>
		)
	}
})

export default UserNameComponent