import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import activityAPI from '../utils/activityAPI';

const Activity = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [subject, setSubject] = useState();
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

  const submitNewActivity = async () => {
    // put everything to form data
    let form = new FormData();
    for (let key in this.inputData) {
      if (!this.inputData.hasOwnProperty(key)) continue;
      switch (key) {
        case 'attachments':
          this.inputData[key].forEach(function (ii) {
            form.append('attachments[]', ii);
          });
          break;

        default:
          form.append(key, this.inputData[key]);
      }
    }
    await activityAPI.saveActivity({ student_id, title, description, subject });
  };

  // const imageUploadHandler = (event) => {
  //   const formData = new FormData();
  //   let files = e.target.files || e.dataTransfer.files;
  //   // console.log(files);
  //   let fileSizes = 0;
  //   for (let index in files) {
  //     if (!files.hasOwnProperty(index)) continue;
  //     if (!isNaN(index)) {
  //       this.items[index] =
  //         e.target.files[index] || e.dataTransfer.files[index];
  //       this.itemsNames[index] = files[index].name;
  //       this.itemsSizes[index] = this.bytesToSize(files[index].size);
  //       fileSizes += files[index].size;
  //       this.formData.append('items[]', this.items);
  //       this.itemSummaries[index] = {
  //         item: this.items[index],
  //         name: this.itemsNames[index],
  //         size: this.itemsSizes[index],
  //       };
  //     }
  //   }
  //   this.itemsTotalSize = this.bytesToSize(fileSizes);
  //   this.$emit('input', this.itemSummaries);
  //   this.reset();
  // };

  return (
    <>
      <Container className="pageContainer">
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
          <Form.Group>
            <Form.File
              id="custom-file"
              label="Upload doc or photo"
              // onChange={imageUploadHandler}
            />
          </Form.Group>
        </Form>
        <Button onClick={submitNewActivity}>Log Activity</Button>
      </Container>
    </>
  );
};

export default Activity;
