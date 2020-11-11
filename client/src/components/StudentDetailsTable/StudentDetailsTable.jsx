import React from 'react';
import { Image } from 'react-bootstrap';
import './studentDetailsTable.css';
import Menu from '../../pages/Menu/Menu';

const StudentDetailsTable = (props) => {
  let data = props.studentData;

  return (
    <>

      <Image src="https://via.placeholder.com/150" id="profilePhoto"/>
        <div id="info">Name: {data.name}</div>
        <div id="info">Age: {data.age}</div>
        <div id="info">Grade: {data.grade}</div>
      <Menu/>
     
    </>
  );
};

export default StudentDetailsTable;
