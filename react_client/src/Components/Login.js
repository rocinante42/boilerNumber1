import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../Actions/loginActions';

class Login extends React.Component {

  render() {
    return (
      <div>
        Login page
        <br />
        <Link to="/test">Go test</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginReducer: state.loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
