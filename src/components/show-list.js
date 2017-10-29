// import React, Component from
// import connect from react-redux

// export Showlist class extending Component
	// renderList()
		// 	return this.props.shows .map()
			// return
				// li with key className list-group-item {each book.title}
	// renders
		// return
			// ul classname list-group col-sm-4
				// call renderList() here

// function map state to props(state) to tie together with redux
	// 	returns
		// 	key shows: value array of shows 

// export default connect mapStateToProps and ShowList 

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
			<ul className-"list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}	
}

function mapStateToProps(state){
	return {
		shows: state.shows
	};
}

export default connect(mapStateToProps)(BookList);