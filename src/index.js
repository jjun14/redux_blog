import React from 'react';
import { render } from 'react-dom'

// react router dependencies
import { Router, Route, IndexRoute } from 'react-router';
// to supply store data to application
import { Provider } from 'react-redux';

import store, { history } from './store';

import App from './components/App';
import BlogList from './components/BlogList';
import CreatePostForm from './components/CreatePostForm'
import Single from './components/Single';
import EditPostForm from './components/EditPostForm'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={BlogList}></IndexRoute>
        <Route path='/posts/:postId/edit' component={EditPostForm}></Route>
        <Route path='/posts/new' component={CreatePostForm}></Route>
        <Route path='/posts/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router,
      document.getElementById('app'));


