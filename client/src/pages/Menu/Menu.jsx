import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import Header from '../layout/Header/Header';
import './menu.css';
import Footer from '../layout/Footer/Footer';

const Menu = () => {
  let { student_id } = useParams();

  return (
    <>
      <Header />
      <Container className="menuContainer">
        <Row center>
          
            <ButtonGroup vertical>
            <Link to={`/students/log/book/${student_id}`}>
              <Button>Log a book</Button>
            </Link>
            <Link to={`/students/log/activity/${student_id}`}>
              <Button id="menuBtns">Log an activity</Button>
            </Link>
            </ButtonGroup>
       
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Menu;
