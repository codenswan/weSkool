import React from 'react';
import {dataGrid} from '@material-ui/data-grid';
import './activitiesTable.css';
import { Container, Table } from 'react-bootstrap';

const ActivitiesTable = (props) => {
  console.log(props);
  
  const columns = [
    { field: 'title', headerName: 'Activity' },
    { field: 'description', headerName: 'Description' },
    { field: 'title', headerName: 'Activity' },
    { field: 'title', headerName: 'Activity' },
  ]

  // createdAt: "2020-10-28T06:49:01.506Z"
  // description: "qgerqrge"
  // photo: "uploads/students/image/d8bf27bad1a9b2664a33034554448433"
  // subject: "Creative"
  // title: "ergqqerg"

  return (
    <Container>
    <Table striped bordered hover >
      <tbody>
      {props.activities.map((activity) => (
        <tr>
  
          <td>{activity.title}</td>
          <td>{activity.description}</td>
          <td>{activity.createdAt}</td>
          {/* {activity.photo ? (
            <td><img src={activity.photo.slice(7)} alt="" /></td>
          ) : (
            <div>no document or photos</div>
          )} */}

          </tr>
      ))}
   
      </tbody>
      </Table>
      </Container>
  );
};

export default ActivitiesTable;
