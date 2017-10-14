// import react and component
// import BookList 

// export App class extending Component
	// render
		// return
			// div		

import React, { Component } from 'react';
import BookList from '../containers/show-list'

export default class App extends Component{
	render(){
		return(
			<div>
				<BookList />
			</div>
		);
	}
} 