import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Import custom CSS

function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('John Doe');
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/login");
    setUsername('John Doe');
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Navbar expand="lg" id="header" className="bg-body-tertiary sticky-top header navmenu">
      <Container>
      <Navbar.Brand href="/">
  <img 
    src="/assets/logo10.png" 
    alt="Logo" 
    className="d-inline-block align-top" 
    style={{ height: '90px', width: 'auto' }} 
  />
</Navbar.Brand>


        {/* Hamburger Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navmenu nav-link-custom ">
            <Nav.Link href="/" className="active nav-link-spacing">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-spacing">About</Nav.Link>
            <Nav.Link href="#services" className="nav-link-spacing">Services</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-spacing">Contact</Nav.Link>
            {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <span className="username me-3">Hello, {username}</span>
              <Button variant="outline-primary" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button variant="primary" className='button1' onClick={handleLogin}>
              Login
            </Button>
          )}
          </Nav>

          {/* User Authentication Section */}
         
        </Navbar.Collapse>
      </Container> 
    </Navbar>
  );
}

export default Header;
