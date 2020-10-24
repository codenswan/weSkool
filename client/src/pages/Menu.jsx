import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';

const Menu = ({ match }) => {
  console.log(match);
  let { student_id } = useParams();
  console.log(student_id);
  return (
       <Container
      className="pageContainer d-flex justify-content-around"
      id="studentsPage"
    >
      <Row center>
        <Col xs="2">
          <ButtonGroup vertical>
            <Link to={`/students/log/book/${student_id}`}>
              <Button>Log a new book</Button>
            </Link>
            <Link to={`/students/log/activity/${student_id}`}>
            <Button >Log a new activity</Button>
            </Link>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
