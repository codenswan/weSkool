import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from './layout/Header/Header';

const Menu = () => {
  let { student_id } = useParams();

  return (
    <>
      <Header />
      <Container className="pageContainer">
        <Row center>
          <Col vertical>
            <Link to={`/students/log/book/${student_id}`}>
              <Button>Log a new book</Button>
            </Link>
            <Link to={`/students/log/activity/${student_id}`}>
              <Button>Log a new activity</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
