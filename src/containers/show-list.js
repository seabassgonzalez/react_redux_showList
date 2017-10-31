// import React, Component

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

// export results of map state to props

import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(ShowList);