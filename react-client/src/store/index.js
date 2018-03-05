import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mainReducer from '../../src/reducers/reducers.js';

const reducer = combineReducers({ // combine all reducers from reducer file
  data: mainReducer,
  routing: routerReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // create store and allow for chrome redux plugin

export default store;
