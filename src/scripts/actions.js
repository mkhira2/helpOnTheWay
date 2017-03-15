//imports
import Backbone from 'backbone';
import {User} from './models/models'
import STORE from './store'
import $ from 'jquery'

//sets the logged in status to false by defualt for now, will have continuity later
STORE._set({loggedIn: false})

//custom actions for the app
let ACTIONS = {

    //takes user data and creates a new user, then logs them in
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

    //logs user in, takes email and password string
    logUserIn:function(email,password){
        
        console.log(email,password)
        let promise = User.login(email,password)
        
        //gets user out of the database and then sets them into the store
        //logs user in and then goes to the 'all groups' page for now
        promise.then(

            (user) => {

                location.hash=`allgroups`
                this.getgroupCollection()
                STORE._set({loggedIn: true})

            }

        )

    },

    //returns the user's id for the user auth model given user data
    getCurrentIDUser: function(userData){

         return User.getCurrentUser().get('_id'); 

    },

    //returns the username of the current user
    getCurrentUserName: function(){
        
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

    //logs user out by calling the .logout() method on the user model. sets logged in status to false
    logUserOut:function(){
        
        try{

            console.log('logging out')
            User.logout()
            STORE._set({loggedIn: false})

        }

        catch (e){

            STORE._set({loggedIn: false})
            console.log('no user to logout')
            return('notUser')
            

        } 

    },

    //sets the navbar 'logout' button to logged in or logged out
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

    },

    //adds user to a group, takes the user's id and the groups id
    addUserToGroup:function(userID,groupID){

        //tells the database to put a new user into the group
        return $.ajax({

            method: 'PUT',
		    type: 'json',
		    url: `api/groups/${groupID}/users/${userID}`

        })

    },

    //returns collection of data for current group
    getgroupCollection:function(){

         return STORE.data.groupCollection.fetch()

    },

    //returns all of the messages for a given group, takes group id
    getMessagesByGroup: function(groupID){

        return STORE.data.messageCollection.fetch({

            data: {"groupID": `${groupID}`}

        })

    },

    //posts a message to the server given message data
    createNewMessage:function(messageData){

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

        //adds a new group to the store
        promise.then(STORE.data.messageCollection.fetch({

            data: {"groupID": `${messageData.groupID}`}

        }))

    },

    //posts a new group to the database and loads the new group's page(almost, haven't made a new group page yet)
    createNewGroup:function(groupData){
         var promise = $.ajax({
		    method: 'POST',
		    type: 'json',
		    url: `api/groups/`,
            data: {
                name: groupData.name,
                description: groupData.description,
                purpose:groupData.purpose,
            }
         })
         promise.then((groupInfo) => {
             location.hash = `group/${groupInfo._id}`
         })
    },

    //changes the navbar 'login' button to say 'login' or 'logout' based on user's status
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