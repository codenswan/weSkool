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
    width: '150px',
  };

  return (
    <>
      <Authenticated>
        <Container className="menuContainer">
          <ButtonGroup className="justify-content-around" vertical>
            <Link to={`/students/log/book/${student_id}`}>
              <Button style={logBtns}>New Book</Button>
            </Link>
            <Link to={`/students/log/activity/${student_id}`}>
              <Button style={logBtns}>New Activity</Button>
            </Link>
          </ButtonGroup>
          <ButtonGroup vertical>
            <Link to={`/students/viewbooks/${student_id}`}>
              <Button style={logBtns}>View Books</Button>
            </Link>
            <Link to={`/students/viewactivities/${student_id}`}>
              <Button style={logBtns}>View Activities</Button>
            </Link>
          </ButtonGroup>
        </Container>
        <Footer />
      </Authenticated>
    </>
  );
};

export default Menu;
