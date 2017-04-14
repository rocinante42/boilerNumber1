import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from './Components/Main';

import * as actionCreators from './Actions/testAction';

function mapStateToProps(state) {
  return {
    testReducer: state.testReducer,
    defaultState: state.defaultState,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
