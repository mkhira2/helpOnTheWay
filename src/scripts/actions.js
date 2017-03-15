import Backbone from 'backbone';
import {User} from './models/models'
import STORE from './store'
import $ from 'jquery'
STORE.data.loggedIn = false
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
                 STORE.data.loggedIn = true
             }
         )
    },
    logUserOut:function(){
        
        try{
            console.log('logging out')
            User.logout()
            STORE.data.loggedIn = false
        }
        catch (e){
            console.log('no user to logout')
            return('notUser')
            STORE.data.loggedIn = false
        }
        
        
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
        
        try{
            if(User.getCurrentUser().get('userName') != undefined ){
                return User.getCurrentUser().get('userName'); 
            }
            else{
                return('notUser')
            }
        }
        catch (e){
            console.log('no user')
            return('notUser')
        }

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
    },
    loginOrLogout: function(){
        
        try{
            
            console.log(this.getCurrentUserName()? 'logout' : 'login')
            
            if(STORE.data.loggedIn === false){
                return 'login'
            }
            else{
                return 'logout'
            }
            
        }
        catch (e){
            return ''
        } 
    }
    
}

export default ACTIONS

//58c7518e4233c96620f55bb4