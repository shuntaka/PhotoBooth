import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route } from 'react-router';
import PhotoBooth from './components/PhotoBooth';
import App from './components/App';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoBooth}></IndexRoute>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
