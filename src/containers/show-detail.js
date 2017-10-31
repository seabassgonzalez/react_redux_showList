// import React and Component from react
// import connect from redux

// class ShowDetail extending component
	// render
		// if statement to check if this.props.show exists
			// if not return div text saying to select a show to start
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
		if(!this.props.show){
			return(
				<div>Select a show to start.</div>;
			)
		}
		return(
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.show.title}</div>
				<div>Number of Episodes: {this.props.show.episodes}</div>
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