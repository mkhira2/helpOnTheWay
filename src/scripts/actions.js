import Backbone from 'backbone';
import {User} from './models/models'
import STORE from './store'

let ACTIONS = {
    createNewUser: function(userData){
        let promise = User.register(userData);
        promise.then(
            ()=>{
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
                 console.log('success')
                 
             }
         )
     }
}

export default ACTIONS