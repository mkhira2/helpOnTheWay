import Backbone from 'backbone';
import models from './models/models'

let ACTIONS = {
    createNewUser: function(){
        let user = new model.UserAuthModel().register(userData);
    }
}

export default ACTIONS