import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Tracey Saada</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/about" style={{color: "#FFF"}}>About Me</Link></Nav.Link>
            <Nav.Link><Link to="/projects" style={{color: "#FFF"}}>Projects</Link></Nav.Link>
            <Nav.Link ><Link to="/homework" style={{color: "#FFF"}}>Homework</Link></Nav.Link>
            <Nav.Link ><Link to="/timeline" style={{color: "#FFF"}}>Timeline</Link></Nav.Link>
            <Nav.Link ><Link to="/contact" style={{color: "#FFF"}}>Contact Me</Link></Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
export default Header;
