import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import StudentAPI from '../../utils/studentAPI';
import './studentDetailsTable.css';
import Menu from '../../pages/Menu/Menu';

const StudentDetailsTable = (props) => {
  let data = props.studentData;

//   const [studentBooks, setStudentBooks] = useState([]);

//   useEffect(() => {
//     getAllStudentBooks();
//   }, []);

//   let { student_id } = useParams();

//   const getAllStudentBooks = async () => {
//     const allbooks = await StudentAPI.getStudentBooks(student_id);
//     setStudentBooks(allbooks.data.books);
//     console.log(allbooks.data.books);
//   };

  return (
    <>
      <Container>
        <div id="info">Name: {data.name}</div>
        <div id="info">Age: {data.age}</div>
        <div id="info">Grade: {data.grade}</div>
      <Menu/>
      </Container>
    </>
  );
};

export default StudentDetailsTable;
