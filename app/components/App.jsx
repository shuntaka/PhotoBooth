import { connect } from 'react-redux';
import { scoreFetchData } from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
  return {
    score: state.score,
    scoreIsLoading: state.scoreIsLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    scoreFetchData: url => dispatch(scoreFetchData(url)),
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
