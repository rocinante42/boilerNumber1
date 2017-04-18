import React from 'react';
import { Container } from 'reactstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class NavigationBar extends React.Component {
  render() {
    const _style = { backgroundColor: '#333', color: 'white' };
    return (
      <div>
        <Navbar style={_style} inverse collapseOnSelect>
          <Container>
            <Navbar.Header>
              <Navbar.Toggle />
              <Navbar.Brand style={{ color: 'white' }}>Iron <span style={{ color: '#f4bc42' }}>RE</span>-Certification</Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem>
                  Github
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
