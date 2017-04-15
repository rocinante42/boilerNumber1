import React from 'react';
import { Container, Navbar, NavbarToggler, Collapse, NavbarBrand, Nav, NavItem } from 'reactstrap';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const _style = { backgroundColor: '#45477f', color: 'white' };
    return (
      <div>
        <Navbar style={_style} inverse light toggleable>
          <Container>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand>Iron RE-Certification</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  Github
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
