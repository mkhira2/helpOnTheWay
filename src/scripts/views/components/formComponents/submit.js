import React from 'react'
import Backbone from 'backbone'
// import ACTIONS from 'actions.js'

const SubmitComponent = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<button type="submit" value="Value" form="register" className="btn btn-primary">Submit</button>
			</div>
		)
	}

// const SubmitComponent = React.createClass({
// 	_createNewUser: ACTIONS.create
// 	render: function() {
// 		return (
// 			<div className="form-group">
// 				<button type="submit" Value="Value" form="register" className="btn btn-primary" onClick={this._createNewUser}>Submit</button>
// 			</div>
// 		)
// 	}


// })

// export default SubmitComponent