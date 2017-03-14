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
     logUserIn:function(email,data){
         let promise = User.login(email,data)
         promise.then(
             (user) => {
                 location.hash=`allgroups`
                 STORE.data.groupCollection.fetch()
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
    getGroups: function(){
        console.log('fetching')
         return STORE.data.groupCollection.fetch()
    }
}

export default ACTIONS

//58c7518e4233c96620f55bb4