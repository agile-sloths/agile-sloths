import { createStore } from 'redux';
import { combineReducers } from 'redux';
import mainReducer from '../../src/reducers/reducers.js';

<<<<<<< HEAD
const reducer = combineReducers({ // combine all reducers from reducer file
  data: mainReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // create store and allow for chrome redux plugin
=======
const reducer = combineReducers({
  data: testReducer
});

const store = createStore(reducer);
>>>>>>> c185f30ff5f510616d14eb2941ca26c9bf19af0a

export default store;
