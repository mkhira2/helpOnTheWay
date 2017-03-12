import React from 'react'
import Backbone from 'backbone'

//entire navbar
var	NavBarComponent = React.createClass({
	
	//builds a list of buttons based on a .buttons property
	_makeNavButtons: function(){

		var buttonsArray = []
		
		for(var btnProp in this.props.navButtons){
			console.log(btnProp)
			buttonsArray.push(<NavButtonComponent buttonsProps = {this.props.navButtons[btnProp]}/>)
			
		}

		return buttonsArray

	},
	
	//returns the whole navbar component
	render: function() {

		return(
			<nav className = "navBarComponent">{this._makeNavButtons()}</nav>
		)
	}
})

//actual single button component
var NavButtonComponent = React.createClass({
	
	render: function(){
		console.log('rendering button')
		return(

			<a href = {this.props.buttonsProps.link} className="navButton" id={this.props.buttonsProps.name}>{this.props.buttonsProps.name}</a>
		)
	}

})

export default NavBarComponent 