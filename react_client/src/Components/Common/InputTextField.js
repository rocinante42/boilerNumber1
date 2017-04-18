import React from 'react';
import _ from 'lodash';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';


export default class InputTextField extends React.Component {
  render() {
    return (
      <div>
        <FormGroup>
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl type={this.props.inputType} name={this.props.inputName} placeholder={this.props.inputPlaceHolder} id={this.props.inputId} />
          { this.props.errors ? (<HelpBlock>{this.props.feedbackMessage}</HelpBlock>) : '' }
        </FormGroup>
      </div>
    );
  }
}
