import React, { Component } from "react";

import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends Component {
    render () {
        return (
            <>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Tracey Saada</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">About Me</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/timeline">Timeline</Nav.Link>
                <Nav.Link href="/cvpage">CV</Nav.Link>
              </Nav>
            </Navbar>
           

          </>
          
        )
    }
}
export default Header;