import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// bootstrap components
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import * as actionCreators from './../../Actions/loginActions';
import NavigationBar from '../NavigationBar';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {

  render() {
    const jumbotronStyle = {
      backgroundSize: 'cover',
      background: 'url(pattern.png) center center',
    };
    return (
      <div>
        <NavigationBar />
        <Jumbotron style={jumbotronStyle}>
          <Container>
            <Row>
              <Col className="text-center"></Col>
              <Col><LoginForm /></Col>
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
