import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from '../reducers/index';

// import dummy data
import posts from '../data/posts';

const defaultState = {
  posts
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store)

// for hot reloading a reducer
if(module.hot){
  module.hot.accept('../reducers/', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store
