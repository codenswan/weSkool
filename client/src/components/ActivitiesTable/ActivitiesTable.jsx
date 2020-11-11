import React from 'react';
import { dataGrid } from '@material-ui/data-grid';
import './activitiesTable.css';
import { Card, Container, Table } from 'react-bootstrap';
import Authenticated from '../../pages/layout/Authenticated/Authenticated';

const ActivitiesTable = (props) => {
  console.log(props);

  const columns = [
    { field: 'title', headerName: 'Activity' },
    { field: 'description', headerName: 'Description' },
    { field: 'title', headerName: 'Activity' },
    { field: 'title', headerName: 'Activity' },
  ];

  return (
    <>
      {props.activities.map((activity) => (
        <Card id="activityCard" key={activity._id}>
          {activity.photo ? (
            <Card.Img id="activityPhoto" src={activity.photo.slice(7)} alt="" />
          ) : (
            <div>no document or photos</div>
          )}
          <Card.Body>
            <Card.Text>Activity: {activity.title}</Card.Text>
            <Card.Text>Description: {activity.description}</Card.Text>
            <Card.Text>
              Created: {new Date(activity.createdAt).toDateString()}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ActivitiesTable;
