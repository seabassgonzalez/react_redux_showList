// export default function, all reducers take two arguments: state and action
// state argument is not application state, only the state state this reducer is responsible for

	// switch statement to check action type, set state to null for initial boot up case so that reducer doesn't return undefined
		// case SHOW_SELECTED
			// return action.payload
	// base case return state in case we don't care about current action

export default function(state = null, action){
	switch(action.type){
		case 'SHOW_SELECTED':
			return action.payload
	}
	return state
}