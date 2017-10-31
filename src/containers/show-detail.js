// import React and Component from react
// import connect from redux

// class ShowDetail extending component
	// render
		// return
			// div show detail string

// define mapStateToProps to connect to redux
	// returns object
		// show referencing activeShow state from reducer

// export container connect mapstatetoprops and showdetail

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class ShowDetail extends Component {
	render(){
		return(
			<div>Show Detail</div>
		);
	}
}

function mapStateToProps(state){
	// returned comes back as props in show detail
	return{
		show: state.activeShow
	};
}

export default connect(mapStateToProps)(ShowDetail);