import React from 'react';
import './activitiesTable.css';

const ActivitiesTable = (props) => {
  console.log(props);
  return (
    <ul>
      {props.activities.map((activity) => (
        <>
          {activity.photo ? (
            <img src={activity.photo.slice(7)} alt="" />
          ) : (
            <div>no document or photos</div>
          )}

          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </>
      ))}
      <div>activties table</div>
    </ul>
  );
};

export default ActivitiesTable;
