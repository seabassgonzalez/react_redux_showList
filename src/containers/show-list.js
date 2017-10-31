// import React, Component
// import connect from react-redux
// import selectShow from actions
// import bindActionCreators from redux to flow action created by action creator to reducers

// export Showlist class extending Component
	// renderList()
		// 	return this.props.shows .map()
			// return
				// li with key className list-group-item {each book.title}
	// renders
		// return
			// ul classname list-group col-sm-4
				// call renderList() here

// Map state to props to track state
	// return will show up as props inside ShowList
		// shows: state.shows

// function mapDispatchToProps takes dispatch as an argument
	// return bindActionCreators passing it an object { selectShow: selectShow} (the action creator we imported above), dispatch

// export results of map state to props, mapDispatchToProps, and BookList

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectShow } from '../actions/index';
import { bindActionCreators } from 'redux';

class ShowList extends Component {
	renderList(){
		return this.props.shows.map((show)=> {
			return(
				<li key={show.title} className="list-group-item">{show.title}</li>
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
	return {
		shows: state.shows
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ selectShow: selectShow}, dispatch)
}

export default connect(mapStateToProps)(ShowList);