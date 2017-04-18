// Dependencies
import React from 'react';
import { Form, Button, Col, FormGroup, Row, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import serialize from 'form-serialize';
import Calendar from 'react-bootstrap-date-picker';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputTextField from './../Common/InputTextField';
import * as actionCreators from './../../Actions/Iron/addIronActions';


class AddIronPiece extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    console.log("going back")
    this.props.history.goBack();
  }
  handleSubmit(e) {
    e.preventDefault();
    const data = serialize(e.target, { hash: true });
    this.props.addIronPiece(data).then(() => {
      this.props.history.goBack();
    });
  }
  render() {
    return (
      <div>
        <Row>         
          <Col xs={6} md={6}><h1>Add Iron Piece</h1></Col>
          <Col xs={6} md={6}><h1><Link style={{ verticalAlign: 'middle', marginBottom: '-99999px' }} className="pull-right" to="/home">Back to Iron Pieces</Link></h1></Col>
        </Row>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <Col xs={6} md={6} >
            <InputTextField inputType="text" label="Customer" inputName="Customer" inputId="Customer" />
          </Col>
          <Col xs={6} md={6} >
            <InputTextField inputType="text" label="Serial Number" inputName="Serial_Number" inputId="Serial_Number" />
          </Col>
          <Col xs={6} md={6} >
            <InputTextField inputType="text" label="Manufacturer" inputName="Manufacturer" inputId="Manufacturer" />
          </Col>
          <Col xs={6} md={6} >
            <InputTextField inputType="text" label="Size" inputName="Size" inputId="Size" />
          </Col>
          <Col xs={6} md={4} >
            <InputTextField inputType="text" label="Product Type" inputName="Product_Type" inputId="Product_Type" />
          </Col>
          <Col xs={6} md={4} >
            <InputTextField inputType="text" label="Iron Description" inputName="Iron_Description" inputId="Iron_Description" />
          </Col>
          <Col xs={6} md={4} >
            <FormGroup>
              <ControlLabel>Next Inspection Due</ControlLabel>
              <Calendar id="Next_Inspection_Due" name="Next_Inspection_Due" />
            </FormGroup>
          </Col>
          <FormGroup>
            <Col xs={6} md={6}><Button bsStyle="primary" type="submit">Submit</Button> <Button onClick={this.goBack}>Cancel</Button></Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    ironViewerReducer: state.ironViewerReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddIronPiece));
