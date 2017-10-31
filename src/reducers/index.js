// import combineReducers from redux
// import ShowsReducer
// import active show reducer

// constant rootReducer to use combineReducers
	// map state -- shows is showsReducer
	// active show is activeShow
// export rootReducer

import { combine Reducers } from 'redux';
import ShowsReducer from './reducer_shows';
import ActiveShow from './reducer_active_show';

const rootReducer = combineReducers({
	shows: ShowsReducer,
	activeShow: ActiveShow
});

export default rootReducer;