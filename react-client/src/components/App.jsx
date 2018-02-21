import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoginForm from './Login.jsx';
import Signup from './Signup.jsx'

const App = ({ store }) => (
  <div>
      <Provider store={store}>
        <Signup/>
      </Provider>
  </div>
)

export default App;
