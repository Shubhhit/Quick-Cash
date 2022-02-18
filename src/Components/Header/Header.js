import React from "react";
import './Header.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import Logo from '../../Image/Logo.svg';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
<Navbar expand="lg" fixed="top" className="navbar-top">
  <Container>
    <Navbar.Brand href="#home"><img src={Logo}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <Link to="#home" className="header-links">Home</Link>
            <Link to="#features" className="header-links">Sell Now</Link>
            <Link to="#pricing" className="header-links">Our Store</Link>
            <Link to="#features" className="header-links">Auction</Link>
            <button className="login-button">Login</button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


     
    </div>
  );
};

export default Header;
