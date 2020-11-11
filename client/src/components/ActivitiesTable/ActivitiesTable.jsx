import React from 'react';
import './activitiesTable.css';
import { Card} from 'react-bootstrap';

const ActivitiesTable = (props) => {
  console.log(props);

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
