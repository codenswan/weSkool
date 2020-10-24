import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from '../utils/studentAPI';
import './styles.css';

const Students = () => {
  const [studentRoll, setStudentRoll] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const response = await API.getStudents();
    setStudentRoll(response.data);
  };

  const addStudentHandler = async () => {
    console.log('the button works');
  };

  return (
    <>
      <Container className="pageContainer" id="studentPage">
        <div>Click on a student to create a new log</div>
        <ButtonGroup vertical>
        {studentRoll.map((student) => (
          <Link to={`/students/log/${student._id}`} key={student._id}>
            <Button id="studentBtns">{student.name}</Button>
          </Link>
        ))}
      </ButtonGroup>
        <Link to={`/students/new`}>
          <Button onClick={addStudentHandler}>Add new student</Button>
        </Link>
      </Container>
    </>
  );
};

export default Students;
