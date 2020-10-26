import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StudentButtons from '../components/StudentButtons/StudentButtons';
import API from '../utils/studentAPI';
import FooterPage from './layout/Footer/Footer';
import './styles.css';

const Students = () => {
  const [studentRoll, setStudentRoll] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const response = await API.getAllStudents();
    setStudentRoll(response.data);
  };

  const addStudentHandler = async () => {
    console.log('the button works');
  };

  return (
    <>
      <Container className="pageContainer" id="studentPage">
        <div>Click on a student to create a new log</div>
        <StudentButtons studentRoll={studentRoll}/>
        <Link to={`/students/new`}>
          <Button onClick={addStudentHandler}>Add new student</Button>
        </Link>
      </Container>
      <FooterPage/>
    </>
  );
};

export default Students;
