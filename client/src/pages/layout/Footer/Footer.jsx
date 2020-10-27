import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deepPurple } from '@material-ui/core/colors'
import HomeIcon from '@material-ui/icons/Home';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import './footer.css'

const Footer = () => {
  return (
    <Container>
      <Navbar className="justify-content-around " id="customColor" fixed="bottom">
        <Nav.Item>
          <Link to="/">
            <HomeIcon style={{ color: deepPurple[500], fontSize: 40  }}/> 
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/students">
            <TagFacesIcon style={{ color: deepPurple[500], fontSize: 40  }}/>
          </Link>
        </Nav.Item>
      </Navbar>
    </Container>
  );
};

export default Footer;
