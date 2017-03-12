import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { score, scoreIsLoading } from './score';

export default combineReducers({
  score,
  scoreIsLoading,
  routing: routerReducer,
});
