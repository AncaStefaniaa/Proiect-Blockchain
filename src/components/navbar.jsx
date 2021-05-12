import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navhead extends Component {
  state = {};
  render() {
    return (
      <Navbar className="bar" background="dark" variant="dark" expand="lg">
        <Navbar.Brand mb={0} href="#home">
          DetectCert
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item className="mt-2 mr-2 ">
              <Link
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
                to="/"
              >
                Add cert
              </Link>
            </Nav.Item>
            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
                to="/verify"
              >
                Verify
              </Link>
            </Nav.Item>
            <Nav.Item className="mt-2 mr-3">
              <Link
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
                to="/view"
              >
                View Certificate
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navhead;
