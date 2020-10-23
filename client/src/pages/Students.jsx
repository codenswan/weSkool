import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from 'mdbreact';
import { Link } from 'react-router-dom';
import API from '../utils/studentAPI';

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
    <MDBContainer
      className="pageContainer d-flex justify-content-around"
      id="studentsPage"
    >
      <MDBRow center>
          <div>Click on a student to create a new log</div>
        <MDBCol xs="2">
          <MDBBtnGroup vertical>
            {studentRoll.map((student) => (
              <Link to={`/students/log/${student._id}`} key={student._id}>
                <MDBBtn>{student.name}</MDBBtn>
              </Link>
            ))}
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
      <MDBBtn onClick={addStudentHandler}>
        <MDBIcon icon="plus" size="2x" />
      </MDBBtn>
    </MDBContainer>
  );
};

export default Students;
