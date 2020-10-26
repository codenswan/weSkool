import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';

const StudentButtons = (props) => {
    return (
    <ButtonGroup vertical>
      {props.studentRoll.map((student) => (
        <Link to={`/students/log/${student._id}`} key={student._id}>
          <Button block id="studentBtns">{student.name}</Button>
        </Link>
      ))}
    </ButtonGroup>
  );
};
export default StudentButtons;
