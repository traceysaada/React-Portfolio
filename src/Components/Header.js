import React, { Component } from "react";
import Homepage from "./HomePage"
import Projects from "./ProjectPage"
import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends Component {
    render () {
        return (
            <>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Tracey Saada</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#about">Home</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#timeline">Timeline</Nav.Link>
                <Nav.Link href="#cv">CV</Nav.Link>
              </Nav>
            </Navbar>
            <div id="about">
                <Homepage />
            </div>
            <div id="projects">
                <Projects />
            </div>

          </>
          
        )
    }
}
export default Header;