import Backbone from 'backbone'
import $ from 'jquery'
import {app_name} from '../app'

// ..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
const UserAuthModel = Backbone.Model.extend({
	urlRoot: '/api/users',
	idAttribute: '_id'
})

UserAuthModel.register = function(newUserData) {
	if(typeof newUserData !== 'object') {  throw new Error("User.register needs to be of type object with email & password properties") }
	if(!newUserData.email || !newUserData.password || !newUserData.userName) {  alert('Please fill out all the required fields') }

	return $.ajax({
		method: 'POST',
		type: 'json',
		url: '/auth/register',
		data: newUserData
	})
}

UserAuthModel.login = function(email, password) {
	if(!email || !password || email === '' || password === '') {  
		throw new Error("User.login(«email», «password») method needs strings for email, password arguments") 
	}

	if(typeof email !== 'string' || typeof password !== 'string' ) {  
		throw new Error("User.login(«email», «password») email + password arguments should both be strings") 
	}

	return $.ajax({
		method: 'POST',
		type: 'json',
		url: '/auth/login',
		data: {
			email: email,
			password: password
		}
	}).then((userData) => {
		localStorage.setItem(app_name + '_user',JSON.stringify(userData))
		return userData
	},(err)=> {
		throw new Error(err.responseText)
		console.log('no server response')
	})
}

UserAuthModel.logout = function(appname, user) {
	return $.getJSON('/auth/logout').then(()=>{
		localStorage.removeItem(app_name + '_user')
	})
}

UserAuthModel.getCurrentUser = function() {
	return localStorage[app_name + '_user'] ? new User(JSON.parse(localStorage[app_name + '_user'])) : null
}

UserAuthModel.getUsersGroups = function() {
	return localStorage[app_name + '_user'] ? new User(JSON.parse(localStorage[app_name + '_user'])) : null
}

// ..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
// ^^ DO NOT TOUCH ^^

// but, you may extend the UserAuthModel Constructor (which is a Backbone Model)
export const User = UserAuthModel.extend({
	initialize: function(){

	}
})

export const GroupCollection = Backbone.Collection.extend ({
    url: '/api/groups'
})

export const GroupModel = Backbone.Model.extend ({
    idAttribute: '_id',
    urlRoot: '/api/groups/'
})

// backbone will automatically construct
// /api/groups/:groupId for a put request
// and use
// /api/groups/ for a post request

// if he wants a special endpoint for something like adding someone to a group
// you might have to use $.post (see docs) instead of backbone

export const MessageCollection = Backbone.Collection.extend ({
    url: '/api/messages'
})

export const MessageModel = Backbone.Model.extend ({
    url: '/api/message'
})


