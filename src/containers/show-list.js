// import React, Component
// import connect from react-redux
// import selectShow from actions
// import bindActionCreators from redux to flow action created by action creator to reducers

// export Showlist class extending Component
	// renderList()
		// 	return this.props.shows .map()
			// return
				// li with key className, onClick function to update selected show, list-group-item {each show.title}
	// renders
		// return
			// ul classname list-group col-sm-4
				// call renderList() here

// Map state to props to track state
	// return will show up as props inside ShowList
		// shows: state.shows

// function mapDispatchToProps takes dispatch as an argument
	// return bindActionCreators passing it an object { selectShow: selectShow} (the action creator we imported above), dispatch

// export results of map state to props, mapDispatchToProps, and ShowList

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectShow } from '../actions/index';
import { bindActionCreators } from 'redux';

class ShowList extends Component {
	renderList(){
		return this.props.shows.map((show)=> {
			return(
				<li key={show.title} onClick={()=> this.props.selectShow(show)} className="list-group-item">{show.title}</li>
			);
		});
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}	
}

function mapStateToProps(state){
	// Whatever is returned will show up as props inside of ShowList
	return {
		shows: state.shows
	}
}

function mapDispatchToProps(dispatch){
	// Anything returned will end up as props on ShowList container
	// Whenever selectShow is called, the result passed to all reducers
	return bindActionCreators({ selectShow: selectShow}, dispatch)
	// can call this.props.selectShow because of this key to call action creator
}

// Promote ShowList from component to container needs to know about new 
// dispatch method selectShow, make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(ShowList);