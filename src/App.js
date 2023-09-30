import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from './logo.svg';

class App extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <img
          src={LOGO}
          width="30"
          height="30"
          alt="React Bootstrap logo"
        />
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>a
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar >
    );
  }
}
export default App;