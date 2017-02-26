import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './components/App';
import { store } from './store';

const router = (
  <Provider store={store}>
    <Router history={}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
