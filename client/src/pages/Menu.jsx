import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MDBBtn, MDBBtnGroup, MDBCol, MDBContainer, MDBRow } from 'mdbreact';

const Menu = ({ match }) => {
  console.log(match);
  let { student_id } = useParams();
  console.log(student_id);
  return (
       <MDBContainer
      className="pageContainer d-flex justify-content-around"
      id="studentsPage"
    >
      <MDBRow center>
        <MDBCol xs="2">
          <MDBBtnGroup vertical>
            <Link to={`/students/log/book/${student_id}`}>
              <MDBBtn>Log a new book</MDBBtn>
            </Link>
            <Link to={`/students/log/activity/${student_id}`}>
            <MDBBtn >Log a new activity</MDBBtn>
            </Link>
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Menu;
