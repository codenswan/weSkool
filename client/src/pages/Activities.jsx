import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Activities = () => {
  return (
    <>
      <Container className="pageContainer">
        <Form>
          <Form.Group>
            <Form.Label>Activity</Form.Label>
            <Form.Control name="activityName" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" />
          </Form.Group>
          <Form.Group>
            <Form.Label
              className="my-1 mr-2"
              htmlFor="inlineFormCustomSelectPref"
            >
              Subject
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
              <option value="0">Choose...</option>
              <option value="1">English</option>
              <option value="2">Maths</option>
              <option value="3">Science</option>
              <option value="4">HSIE</option>
              <option value="5">Creative Arts</option>
              <option value="6">PDHPE</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.File id="custom-file" label="Upload doc or photo" />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Activities;
