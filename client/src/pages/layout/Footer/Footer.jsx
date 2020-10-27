import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const Footer = () => {
  return (
    <Container>
      <Navbar className="justify-content-around" bg="dark" fixed="bottom">
        <Nav.Item>
          <Link to="/">
           Home Icon 
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/students">
            Students
          </Link>
        </Nav.Item>
      </Navbar>
    </Container>
  );
};

export default Footer;
