// import React from react
// import ReactDOM from react-dom
// import Provider from react-redux
// import createStore and applyMiddleware from redux
// import BrowserRouter Route Switch and Link from react-router-dom

// import reducers
// import App

// const createStoreWithMiddleware = applyMiddleware()(createStore)

// ReactDOM.render
	// Provider store = {createStoreWithMiddleware(reducers)}
	// document.querySelector(.container)

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import reducers from './reducers';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Route path='/' component={App} />
    	</div>
    </BrowserRouter>
  </Provider> // comment to cleanup sublime syntax highlighting
  , document.querySelector('.container'));
