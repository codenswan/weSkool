import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const Footer = () => {
  return (
    <Container>
      <Navbar className="justify-content-around" bg="dark" fixed="bottom">
        <Nav.Item>
          <Nav.Link to="/">
           Home Icon 
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/students">
            Students
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </Container>
  );
};

export default Footer;
