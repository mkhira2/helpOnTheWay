import React from 'react'
import Backone from 'backbone'


const UserNameComponent = React.createClass({
	render: function() {
		return (
		<div className="form-group">
			<label>User Name</label>
			<input placeholder="Enter User Name" type="text" name="username" className="form-control" />
		</div>
		)
	}
})

export default UserNameComponent