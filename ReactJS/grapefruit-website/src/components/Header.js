import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top mr-2"
          alt="Grapefruit logo"
        />
        <span style={{ fontFamily: 'Oldenburg', fontSize: '24px' }}>Grapefruit</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/health-coaches">Health Coaches</Nav.Link>
          <Nav.Link as={Link} to="/popular-recipes">Popular Recipes</Nav.Link>
          <Nav.Link as={Link} to="/upcoming-classes">Upcoming Classes</Nav.Link>
          <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
