import React from 'react'
import Backbone from 'backbone'
import MessageTextComponent from './messageCreate'
import MessagesComponent from './messagesComponent.js'
import STORE from "../../../store"
import ACTIONS from "../../../actions"

var JoinedGroupsComponent = React.createClass({
	componentDidMount: function(){

		ACTIONS.getgroupCollection()

		STORE.on('updateContent', ()=> {

			this.setState(STORE.data)

		})
	},
	getInitialState: function() {
		ACTIONS.getgroupCollection()
		this.setState(STORE.data)
		return STORE.data

	},
	render: function(){
	
		if(this.props.loggedIn === true){

			return(

				<div className = "joinedGroupsContainer container-fluid" id="joinedGroupsContainer">

					<GroupSnapshots 

						groups={this.state.groupCollection.models} 

					/>

				</div>

			)

		}

		else{

			return(
				null
			)
		}

	}
	
})

var GroupSnapshots = React.createClass({

	_makeSnapShots: function(){

		var allGroups = this.props.groups

		var groupSnapshotsArray = [<DefaultSnapshot />]

		for(var i = 0; i < allGroups.length; i++){

			var currentGroup = allGroups[i]
			var groupId = currentGroup.get('_id')

			if(ACTIONS.returnUserGroups().includes(groupId)){
			
				var snapshotData = getSnapshotData(currentGroup, groupId)
	    		
				groupSnapshotsArray.push(

					<SingleGroupSnapshot 

					msgTitle = {snapshotData.messageTitle}
					msgBody = {snapshotData.messageBody}
					groupName = {snapshotData.groupName}
					description = {snapshotData.groupDescription}
					purpose = {snapshotData.groupPurpose}
					groupId = {snapshotData.groupId}

					/>)
			}
			else{
				console.log('not in this group', ACTIONS.returnUserGroups())

			}

		}

		return(

			groupSnapshotsArray
		
		)

	},

	render: function(){

		return(

			<div className = "groupSnapshots"><h3>your support network</h3>{this._makeSnapShots()}</div>

		)

	}
	
})

var SingleGroupSnapshot = React.createClass({
	_createAction: function(groupID) {
		
		location.hash=`group/${groupID}`
		
	},
	render: function(){
		return(

			<div className = "singleGroupSnapshot">

				<h4>
					group: {this.props.groupName}
				</h4>


				<p>
					description: {this.props.description}
				</p>


				<p>
					purpose: {this.props.purpose}
				</p>

				<button className="btn btn-secondary my-1" id="openGroupButton" onClick={(ev) => this._createAction(this.props.groupId)}>open group</button>

			</div>
		)
	}

})

var DefaultSnapshot = React.createClass({
	render: function(){
		return(
			<h4>Visit the groups page to join a group</h4>
		)
	}
})

function getSnapshotData(currentGroup, id){

	var messageTitle = " "
	var messageBody = " "
	var groupName = currentGroup.attributes.name
	var groupDescription = currentGroup.get('description')
	var groupPurpose = currentGroup.get('purpose')

	return(
		{
			'messageTitle': messageTitle,
			'messageBody': messageBody,
			'groupName': groupName,
			'groupDescription': groupDescription,
			'groupPurpose': groupPurpose,
			'groupId': id
		}

	)
}

export default JoinedGroupsComponent