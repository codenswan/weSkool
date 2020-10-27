import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StudentButtons from '../components/StudentButtons/StudentButtons';
import API from '../utils/studentAPI';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
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

  return (
    <>
      <Header/>
      <Container className="pageContainer">
        <div>Click on a student to create a new log</div>
        <StudentButtons studentRoll={studentRoll}/>
        <Link to={`/students/new`}>
          <Button>Add new student</Button>
        </Link>
      </Container>
      <Footer/>
    </>
  );
};

export default Students;
