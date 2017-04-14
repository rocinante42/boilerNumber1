import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../Actions/testAction';



const Test = () => (
  <div>
    <br />
      Hola Mundo <Link to="/test2">Click aqui</Link>
  </div>
);

function mapStateToProps(state) {
  return {
    testReducer: state.testReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));
