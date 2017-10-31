// import react and component
// import BookList 

// export App class extending Component
	// render
		// return
			// div		

import React, { Component } from 'react';
import ShowList from '../containers/show-list';

export default class App extends Component{
	render(){
		return(
			<div>
				<ShowList />
			</div>
		);
	}
} 