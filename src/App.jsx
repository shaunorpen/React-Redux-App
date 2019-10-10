import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Market from './components/Market';
import * as reducers from './state/reducers';

import './App.less';

// create a combined reducer (4)
const monsterReducer = combineReducers({
  // the key is the real name for the slice of state
  cart: reducers.cartReducer,
  stock: reducers.stockReducer,
});

// feed the createStore the combined reducer (5)
// THERE ARE MANY WAYS TO CREATE A STORE. SEE DOCS!
const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

// inject the store into the provider (6)
ReactDOM.render(<>
  <Provider store={store}>
    <Market />
  </Provider>
</>, document.querySelector('#target'));
