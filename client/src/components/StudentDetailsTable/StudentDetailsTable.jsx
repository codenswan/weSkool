import React from 'react';
import { Container } from 'react-bootstrap';
import './studentDetailsTable.css';

const StudentDetailsTable = (props) => {
  let data = props.studentData;

    const 

  return (
    <>
      <Container>
        <div id="info">Name: {data.name}</div>
        <div id="info">Age: {data.age}</div>
        <div id="info">Grade: {data.grade}</div>\
      </Container>
          <table>
              {data.map(student => (
                  <tbody>
                      <tr>
                          <td>{student.name}</td>
                      </tr>
                  </tbody>
              ))}
          </table>
    </>
  );
};

export default StudentDetailsTable;
