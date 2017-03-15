import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from '../init'
import HeaderComponent from './headerComponent'
import FooterComponent from './footerComponent'
import STORE from '../store'
import ACTIONS from '../actions'

const GroupsPage = React.createClass({
	componentWillMount: function(){
		ACTIONS.getgroupCollection()
		STORE.on('updateContent', ()=> {
			this.setState(STORE.data)
		})
	},
	getInitialState: function() {
		return STORE.data
	},
	render: function() {
	 	return (
	 		<div  className="container-fluid">
				<HeaderComponent />
	 			<Groups groups={this.state.groupCollection} />
	 			<FooterComponent />
	 		</div>
	 	)
 	}
})

const Groups = React.createClass({
	 _renderGroup: function(groupModel) {
	 	return <Group key={groupModel.cid} group={groupModel} />
	 },

	 render: function() {
	 	return (
	 		<div className='groups container my-4' >
	 			<h2 className="text-center">Groups</h2>
	 			<div className='list-group col-12'>
	 				{this.props.groups.map(this._renderGroup)}
	 			</div>
	 		</div>
	 	)
 	}
})

const Group = React.createClass({
	_createAction: function(groupID) {
		console.log(groupID);
		let userID = ACTIONS.getCurrentIDUser()
		console.log(userID)
		ACTIONS.addUserToGroup(userID,groupID)
		location.hash=`group/${groupID}`
	},
	 render: function() {
		  console.log(this)
	 	return (
			 <div className="my-4">
				<h3 className="list-group-item">{this.props.group.get('name')}</h3>
				<h4 className="list-group-item">Description: {this.props.group.get('description')}</h4>
				<p className="list-group-item  secondary small">Purpose: {this.props.group.get('purpose')}</p>
				<button id="groupJoin" className="btn my-1" onClick={(ev) => this._createAction(this.props.group.get('_id'))}>Join the Group</button>
			</div>
	 	)
 	}
})

export default GroupsPage

