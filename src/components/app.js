// import react and component
// import ShowList
// impost ShowDetail

// export App class extending Component
	// render
		// return
			// div
				// ShowList
				// ShowDetail

import React, { Component } from 'react';
import ShowList from '../containers/show-list';
import ShowDetail from '../containers/show-detail';

export default class App extends Component{
	render(){
		return(
			<div>
				<ShowList />
				<ShowDetail />
			</div>
		);
	}
} 