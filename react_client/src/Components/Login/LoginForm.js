import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Card, CardBlock, CardTitle, Button, FormText } from 'reactstrap';
import serialize from 'form-serialize';
import InputTextField from './../Common/InputTextField';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.sessionReducer.isLoggedIn) {
      this.props.history.push('/home');
    }
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('form was submitted');
    const data = serialize(e.target, { hash: true });
    this.props.fetchUserName(data.email, data.password).then(() => {
      return this.props.sessionReducer.isLoggedIn ? this.props.history.push('/home') : false;
    });
  }
  displayError() {
    this.setState({ error: true });
  }
  render() {
    return (
      <div>
        <Card style={{ backgroundColor: '#333', borderColor: '#333', color: 'white' }}>
          <CardBlock>
            <CardTitle className="text-center">Log in
            </CardTitle>
            <hr />
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
                _ref="password"
                label="Password"
                inputPlaceHolder="********"
                inputType="password"
                labelFor="examplePassword"
                inputId="password"
                inputName="password"
              />
              <Button>Submit</Button>
              <hr />
              <FormText className="text-center">Do not have an account? <Link style={{ color: '#f4bc42' }} to="/register">Register now.</Link></FormText>
            </Form>
          </CardBlock>
        </Card>
      </div>
    );
  }
}
