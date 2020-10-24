import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function FileUploadButton(props) {
  return (
    <>
      <Form.Group>
        <Form.File
          id="custom-file"
          label="Upload doc or photo"
          multiple
          name="photos"
          onChange={props.onChange}
        />
      </Form.Group>
    </>
  );
}
