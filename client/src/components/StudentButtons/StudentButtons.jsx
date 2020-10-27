import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import './StudentButtons.css'

const StudentButtons = (props) => {


  const studentBtns = {
    marginBottom: '5px',
    width: '100px'
  }
    return (
    <ButtonGroup vertical>
      {props.studentRoll.map((student) => (
        <Link to={`/students/log/${student._id}`} key={student._id}>
          <Button style={studentBtns} block >{student.name}</Button>
        </Link>
      ))}
    </ButtonGroup>
  );
};
export default StudentButtons;
