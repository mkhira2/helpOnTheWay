import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from '../init'
import HeaderComponent from './groupViews/headerComponent'
import FooterComponent from './groupViews/footerComponent'

const AllGroups = React.createClass({
	render: function (){
		return (
			<div className="container">
				<HeaderComponent />
				<div className= "row">
					<button className="btn btn-primary col-md-5">Create Group</button>
					<input  name="name" type='text' className='groupNameInput form-control col-md-5' placeholder='Group Name'/>
				</div>
				<div className="row">
					<ul className="list-group">
						<div>
						<li className="list-group-item">Group 1</li>
						<button className="btn btn-primary col-md-5">Create Group</button>
						</div>
						<div>
						<li className="list-group-item">Group 2</li>
						<button className="btn btn-primary col-md-5">Create Group</button>
						</div>
						<div>
						<li className="list-group-item">Group 3</li>
						<button className="btn btn-primary col-md-5">Create Group</button>
						</div>
					</ul>
				</div>
			</div>
		)
	}
})

export default AllGroups
