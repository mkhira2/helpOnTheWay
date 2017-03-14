import Backbone from 'backbone';
import {User} from './models/models'
import STORE from './store'
import $ from 'jquery'

let ACTIONS = {
    createNewUser: function(userData){
        let promise = User.register(userData);
        promise.then(
            ()=>{
                console.log('loggin in')
                this.logUserIn(userData.email, userData.password)
            },
            ()=>{
                console.log('failure!')
            }
        )
    },
     logUserIn:function(email,password){
        console.log(email,password)
         let promise = User.login(email,password)
         promise.then(
             (user) => {
                 location.hash=`allgroups`
                 this.getgroupCollection()
             }
         )
     },
     addUserToGroup:function(userID,groupID){
         return $.ajax({
		    method: 'PUT',
		    type: 'json',
		    url: `api/groups/${groupID}/users/${userID}`,
         })
     },
    getCurrentIDUser: function(userData){
         return User.getCurrentUser().get('_id');    
          
    },
    getCurrentUserName:function(){
        return User.getCurrentUser().get('userName');   
    },
    getgroupCollection:function(){
         return STORE.data.groupCollection.fetch()
    },
    getMessagesByGroup: function(groupID){
        return STORE.data.messageCollection.fetch({
            data: {"groupID": `${groupID}`}
        })
    },
    createNewMessage:function(messageData){
        console.log(messageData)
        var promise = $.ajax({
		    method: 'POST',
		    type: 'json',
		    url: `api/messages/`,
            data: {
                posterID:ACTIONS.getCurrentIDUser(),
                title: messageData.title,
                body: messageData.body,
                posterName:ACTIONS.getCurrentUserName(),
                groupID:messageData.groupID
            }
         })
        promise.then(STORE.data.messageCollection.fetch({
            data: {"groupID": `${messageData.groupID}`}
        }))
    }
}

export default ACTIONS

//58c7518e4233c96620f55bb4