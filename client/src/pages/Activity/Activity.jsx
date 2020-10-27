import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import activityAPI from '../../utils/activityAPI';
import FileUploadButton from '../../components/FileUploadButton/FileUploadButton';
import Swal from 'sweetalert2';
import './activity.css';
import Footer from '../layout/Footer/Footer';
import Authenticated from '../layout/Authenticated/Authenticated';

const Activity = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [subject, setSubject] = useState();
  const [files, setFiles] = useState();
  // const [date]

  const inputHandler = (event) => {
    event.preventDefault();
    const handlers = {
      setTitle,
      setDescription,
      setSubject,
    };

    let inputName = event.target.name;
    inputName = inputName.slice(0, 1).toUpperCase() + inputName.slice(1);
    let inputValue = event.target.value;
    handlers[`set${inputName}`](inputValue);
  };

  let { student_id } = useParams();

  const fileHandler = (event) => {
    const files = event.target.files || event.dataTranser.files;
    setFiles(files[0]);
    console.log(files);
  };
  const submitNewActivity = async () => {
    //* put everything to form data
    let form = new FormData();
    form.append('title', title);
    form.append('description', description);
    form.append('subject', subject);
    form.append('student_id', student_id);
    form.append(`photos`, files);

    await activityAPI.saveActivity(form);
    Swal.fire('New activity has been logged!', '', 'success');

    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    setTitle('');
    setDescription('');
    setSubject('no subject');
  };

  return (
    <>
      <Authenticated>
        <Container className="activityContainer">
          <Form>
            <Form.Group>
              <Form.Label>Activity</Form.Label>
              <Form.Control
                name="title"
                defaultValue={title}
                onInput={inputHandler}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                defaultValue={description}
                onInput={inputHandler}
              />
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
                name="subject"
                defaultValue={subject}
                onInput={inputHandler}
                custom
              >
                <option value="no subject">Choose...</option>
                <option value="English">English</option>
                <option value="Maths">Maths</option>
                <option value="Science">Science</option>
                <option value="HSIE">HSIE</option>
                <option value="Creative">Creative Arts</option>
                <option value="PDHPE">PDHPE</option>
              </Form.Control>
            </Form.Group>
            <FileUploadButton onChange={fileHandler} />
          </Form>
          <Button onClick={submitNewActivity}>Log Activity</Button>
        </Container>
        <Footer />
      </Authenticated>
    </>
  );
};

export default Activity;
