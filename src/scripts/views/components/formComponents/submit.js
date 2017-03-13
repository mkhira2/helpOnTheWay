import React from 'react'
import Backbone from 'backbone'

const SubmitComponent = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<button type="submit" className="btn btn-primary">Submit</button>
			</div>
			)
	}

})

export default SubmitComponent