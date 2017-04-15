import React from 'react';
import _ from 'lodash';
import { Label, Input, FormGroup, FormFeedback } from 'reactstrap';


export default class InputTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: false, feedbackMessage: '', label: '', inputType: '', labelFor: '', inputName: '', inputId: '', inputPlaceHolder: '' };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, ...nextProps });
  }
  render() {
    const state = { ...this.state };
    return (
      <div>
        <FormGroup>
          <Label for={state.labelFor} >{this.state.label}</Label>
          <Input type={state.inputType} name={state.inputName} placeholder={state.inputPlaceHolder} id={state.inputId} />
          { this.state.errors ? (<FormFeedback>{this.feedbackMessage}</FormFeedback>) : '' }
        </FormGroup>
      </div>
    );
  }
}
