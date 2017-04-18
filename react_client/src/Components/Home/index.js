// Dependencies
import React from 'react';
import { withRouter, Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
// bootstrap components
import { Container } from 'reactstrap';
// redux actions
// import * as actionCreators from './../../Actions/loginActions';
// Custom React Components
import NavigationBar from '../NavigationBar';
import IronLander from './IronLander';
import AddIronPiece from './AddIronPiece';
import IronViewer from './IronViewer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.addIron = this.addIron.bind(this);
  }
  addIron(e) {
    e.preventDefault();
    this.props.history.push('/home/add_iron');
  }
  render() {
    return (
      <div>
        <NavigationBar {...this.props} />
        <Container style={{ maxWidth: '90%' }}>
          <Router history={this.props.history}>
            <IronLander {...this.props}>
              <Route exact path="/home" component={IronViewer} />
              <Route path="/home/add_iron" component={AddIronPiece} />
            </IronLander>
          </Router>
        </Container>
      </div>
    );
  }
}

export default withRouter(connect(null)(Home));
