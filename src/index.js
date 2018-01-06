// import React from react
// import ReactDOM from react-dom
// import Provider from react-redux
// import createStore and applyMiddleware from redux

// import App
// import reducers

// const createStoreWithMiddleware = applyMiddleware()(createStore)

// ReactDOM.render
	// Provider store = {createStoreWithMiddleware(reducers)}
	// document.querySelector(.container)

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider> // comment to cleanup sublime syntax highlighting
  , document.querySelector('.container'));
