// import React from react
// import ReactDOM from react-dom
// import Provider from react-redux
// import createStore and applyMiddleware from redux
// import BrowserRouter Route Switch and Link from react-router-dom

// import reducers
// import App
// import Home

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
import Home from './components/home';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Route path='/list' component={App} />
    		<Route path='/' component={Home} />
    	</div>
    </BrowserRouter>
  </Provider> // comment to cleanup sublime syntax highlighting
  , document.querySelector('.container'));
