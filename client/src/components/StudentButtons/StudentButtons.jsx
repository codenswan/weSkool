import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';

const StudentButtons = (props) => {
    console.log(props);
  return (
    <ButtonGroup vertical>
      {props.studentRoll.map((student) => (
        <Link to={`/students/log/${props.student._id}`} key={props.student._id}>
          <Button id="studentBtns">{props.student.name}</Button>
        </Link>
      ))}
    </ButtonGroup>
  );
};
export default StudentButtons;
