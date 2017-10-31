// export a function selectShow that takes a show as its argument

export function selectShow(show){
	// selectShow is an action creator, needs to return an action- object with type property
	return{
		type: "SHOW_SELECTED",
		payload: show
	};
}