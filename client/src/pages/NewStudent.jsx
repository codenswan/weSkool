import React from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import studentAPI from '../utils/studentAPI';
import Swal from 'sweetalert2';
import './styles.css';
import Footer from './layout/Footer/Footer';

const NewStudent = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [grade, setGrade] = useState();

  const addNewStudent = async () => {
    await studentAPI.createNewStudent({ name, age, grade });
    Swal.fire('New Student has been added', '', 'success');

    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    setName('');
    setAge('');
    setGrade('');
  };

  const inputHandler = (event) => {
    event.preventDefault();

    const handlers = {
      setName,
      setAge,
      setGrade,
    };

    let inputName = event.target.name;
    inputName = inputName.slice(0, 1).toUpperCase() + inputName.slice(1);
    let inputValue = event.target.value;
    handlers[`set${inputName}`](inputValue);
  };

  return (
    <>
      <Container className="pageContainer">
        <div>Enter student details</div>
        <Form>
          <Form.Group>
            <Form.Control
              name="name"
              defaultValue={name}
              placeholder="Name"
              onInput={inputHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="age"
              defaultValue={age}
              placeholder="Age"
              onInput={inputHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="grade"
              defaultValue={grade}
              placeholder="Grade"
              onInput={inputHandler}
            />
          </Form.Group>
          {/* <Form.Group>
            <Form.File id="custom-file" label="Custom file input" custom />
          </Form.Group> */}
        </Form>
        <Button onClick={addNewStudent}>Create New Student</Button>
      </Container>
      <Footer/>
    </>
  );
};

export default NewStudent;
