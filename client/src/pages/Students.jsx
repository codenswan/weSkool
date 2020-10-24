import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bulma-components';
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

        {studentRoll.map((student) => (
          <Link to={`/students/log/${student._id}`} key={student._id}>
            <Button type="primary" block id="studentBtns">
              {student.name}
            </Button>
          </Link>
        ))}

        <Button onClick={addStudentHandler}></Button>
      </Container>
    </>
  );
};

export default Students;
