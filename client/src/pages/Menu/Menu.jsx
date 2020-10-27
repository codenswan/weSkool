import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import './menu.css';
import Footer from '../layout/Footer/Footer';
import Authenticated from '../layout/Authenticated/Authenticated';

const Menu = () => {
  let { student_id } = useParams();

  const logBtns = {
    marginBottom: '10px',
    width: '100px'
  }

  return (
    <>
      <Authenticated>
        <Container className="menuContainer">
            <ButtonGroup className="justify-content-around" vertical>
            <div>What do you want to log?</div>
              <Link to={`/students/log/book/${student_id}`}>
                <Button style={logBtns}>Book</Button>
              </Link>
              <Link to={`/students/log/activity/${student_id}`}>
                <Button style={logBtns}>Activity</Button>
              </Link>
            </ButtonGroup>
        </Container>
        <Footer />
      </Authenticated>
    </>
  );
};

export default Menu;
