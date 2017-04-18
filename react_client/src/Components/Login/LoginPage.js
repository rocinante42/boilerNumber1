// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// bootstrap components
import { Container, Row, Col, Jumbotron } from 'reactstrap';
// redux actions
import * as actionCreators from './../../Actions/loginActions';
// Custom React Components
import NavigationBar from '../NavigationBar';
import LoginForm from './LoginForm';

// LoginPage renders the entire Login page. 

class LoginPage extends React.Component {

  componentWillReceiveProps(nextProps){
    if (this.props.sessionReducer.isLoggedIn === true) {
      //this.context.router.push('/test');
      console.log('Is logged in!!!');
    }
  }
  render() {
    const jumbotronStyle = {
      background: 'none',
    };
    return (
      <div>
        <NavigationBar />
        <Jumbotron style={jumbotronStyle}>
          <Container>
            <Row>
              <Col className="text-center" />
              <Col xs="6" sm="4"><LoginForm {...this.props} /></Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginReducer: state.loginReducer,
    sessionReducer: state.sessionReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
