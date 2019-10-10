import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Gallery from './components/Gallery';
import * as reducers from './state/reducers';

import './App.less';

const rootReducer = combineReducers({
  photos: reducers.photosReducer,
  page: reducers.pageReducer,
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

// inject the store into the provider (6)
ReactDOM.render(<>
  <Provider store={store}>
    <Gallery />
  </Provider>
</>, document.querySelector('#target'));
