// import React and Component from react
// import connect from redux

// class ShowDetail extending component
	// render
		// return
			// div 
				// h3 details text
				// div referencing this.props.show.title active show

// define mapStateToProps to connect to redux
	// returns object
		// show referencing activeShow state from reducer

// export container connect mapstatetoprops and showdetail

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class ShowDetail extends Component {
	render(){
		return(
			<div>
				<h3>Details for:</h3>
				<div>{this.props.show.title}</div>
			</div>
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