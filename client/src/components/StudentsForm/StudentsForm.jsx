import React from 'react';
import { Container, Form } from 'react-bootstrap';

const StudentsForm = () => {
  return (
    <>
      <Container>
      <Form>
          <Form.Group>
            <Form.Control name="name" placeholder="Name" />
          </Form.Group>
          <Form.Group>
            <Form.Control name="age" placeholder="Age" />
          </Form.Group>
          <Form.Group>
            <Form.Control name="grade" placeholder="Grade" />
          </Form.Group>
          <Form.Group>
            <Form.File id="custom-file" label="Custom file input" custom />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default StudentsForm;
