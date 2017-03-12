import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {
  score: null,
  scoreIsLoading: false,
};
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
