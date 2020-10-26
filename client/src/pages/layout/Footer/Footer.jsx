import React from 'react';
import { Button, ButtonGroup, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterPage = () => {
  return (
    <Container>

    <Navbar bg="dark" fixed="bottom">
        <ButtonGroup>
          <Link to="/">
            <Button> Home Icon </Button>
          </Link>
          <Link to="/students">
          <Button> Students </Button>
          </Link>
      </ButtonGroup>
    </Navbar>
    </Container>
  )
};

export default FooterPage;
