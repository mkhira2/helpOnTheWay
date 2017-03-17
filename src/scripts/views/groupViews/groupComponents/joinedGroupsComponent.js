import React from 'react'
import Backbone from 'backbone'
import MessageTextComponent from './messageCreate'
import MessagesComponent from './messagesComponent.js'
import STORE from "../../../store"
import ACTIONS from "../../../actions"

var JoinedGroupsComponent = React.createClass({

	componentWillMount: function(){

		var currentIDUser = ACTIONS.getCurrentIDUser()

        var userGroups =  ACTIONS.returnGroupsForUser(currentIDUser)

        userGroups.then(

        (userGroupsInfo) => {
    	console.log(userGroupsInfo)
        STORE._set({'userGroups': userGroupsInfo})

        }, 

        (err) => {

        console.log('did not retrieve data',err)

        })

		this.setState(STORE.data)
		

	},


	makeGroupPreviews: function(){

		var groupPreviewsArray = []
		console.log(STORE.data.userGroups)
		for(var i = 0; i < STORE.data.userGroups.length; i++){

			groupPreviewsArray.push(<SingleGroupPreview 
			group = {STORE.data.userGroups[i]} groupId = {STORE.data.userGroups[i]._id}
			/>)
		}

		return groupPreviewsArray
		
	},

	render: function(){

		if(this.props.loggedIn === true){

			return(

				<div className = 'groupPreviewsContainer'>
					{this.makeGroupPreviews()}	
				</div>
			)

		}

		else{

			return (

					<div></div>
				)

		}

		

	},

})

var SingleGroupPreview = React.createClass({

	_createAction(groupID){
		location.hash=`group/${groupID}`
	},
	render: function(){

		return(

			<div className = "singleGroupPreview">

				<h4>
					group: {this.props.group.name}
				</h4>


				<p>
					description: {this.props.group.description}
				</p>


				<p>
					purpose: {this.props.group.purpose}
				</p>

				<button className="btn btn-secondary my-1" id="openGroupButton" onClick={(ev) => this._createAction(this.props.groupId)}>open group</button>

			</div>

		)

	}
})

export default JoinedGroupsComponent