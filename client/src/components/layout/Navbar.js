import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar_ extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" className="navbar">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />{" "}
          House Matchers
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Recommend
          </Link>
          <Nav.Link href="/Visualization">Visualization</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Icon className="user" size="large" />
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar_;
