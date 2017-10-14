// import combineReducers from redux
// import ShowsReducer
// 
// constant rootReducer to use combineReducers
	// map state -- shows is showsReducer
// export rootReducer

import { combine Reducers } from 'redux';
import ShowsReducer from './reducer_shows';

const rootReducer = combineReducers({
	shows: ShowsReducer
});

export default rootReducer;