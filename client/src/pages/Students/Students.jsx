import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StudentButtons from '../../components/StudentButtons/StudentButtons';
import API from '../../utils/studentAPI';
import Footer from './../layout/Footer/Footer';
import Header from './../layout/Header/Header';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './students.css';
import Authenticated from '../layout/Authenticated/Authenticated';

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
    <Authenticated>
      <Header/>
      <Container className="studentContainer">
        <div>Click on a student to create a new log</div>
        <StudentButtons studentRoll={studentRoll}/>
        <Link to={`/students/new`} component={Button}>
          <PersonAddIcon fontSize="large"/>
        </Link>
      </Container>
      <Footer/>
    </Authenticated>
  );
};

export default Students;
