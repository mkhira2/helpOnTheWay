import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomePage from './views/homePage'
import GroupSignUpView from './views/groupCreateView'
import NavBarComponent from './views/components/navBar'
import SingleGroupView from './views/groupViews/singleGroupView'

var app = function() {
	var HelpRouter = Backbone.Router.extend({
		routes: {
			"home": "showLoginPage",
			"registergroup": "showGroupsPage",
			"group": "showSingleGroup",
			"*defaultRoute": "showLoginPage" 
		},

		showLoginPage: function() {
			ReactDOM.render(<HomePage />, document.querySelector('.container'))
		},

		showGroupsPage: function() {
			ReactDOM.render(<GroupSignUpView />, document.querySelector('.container'))

		},
		showSingleGroup: function (){
			ReactDOM.render(<SingleGroupView />, document.querySelector('.container'))
		}
	})
	new HelpRouter
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..