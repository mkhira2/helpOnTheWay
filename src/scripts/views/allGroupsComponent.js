import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from '../init'
import HeaderComponent from './headerComponent'
import FooterComponent from './footerComponent'

const AllGroups = React.createClass({
	render: function (){
		return (
			<div className="container-fluid">
				<HeaderComponent />
				<div className= "row">
					<button className="btn btn-primary col-md-3">Create Group</button>
					<input  name="name" type='text' className='groupNameInput form-control col-md-8' placeholder='Search group'/>
				</div>
				<div className="row">
					<ul className="list-group col-12">
						<div>
						<li className="list-group-item">Group 1</li>
						<button className="btn btn-success col-md-2">Join Group</button>
						</div>
						<div>
						<li className="list-group-item">Group 2</li>
						<button className="btn btn-success col-md-2">Join Group</button>
						</div>
						<div>
						<li className="list-group-item">Group 3</li>
						<button className="btn btn-success col-md-2">Join Group</button>
						</div>
					</ul>
				</div>
			</div>
		)
	}
})

export default AllGroups
