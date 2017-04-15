import React from 'react';
import { Form, Card, CardBlock, CardTitle, Button } from 'reactstrap';
import InputTextField from './../Common/InputTextField';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('form was submitted');
  }
  render() {
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle className="text-center">Log in
            </CardTitle>
            <Form onSubmit={this.onSubmit}>
              <InputTextField
                label="Email"
                inputPlaceHolder="email@email.com"
                inputType="email"
                labelFor="exampleEmail"
                inputId="email"
                inputName="email"
              />
              <InputTextField
                label="Password"
                inputPlaceHolder="********"
                inputType="password"
                labelFor="examplePassword"
                inputId="Password"
                inputName="password"
              />
            <Button>Submit</Button>
            </Form>
          </CardBlock>
        </Card>
      </div>
    );
  }
}
