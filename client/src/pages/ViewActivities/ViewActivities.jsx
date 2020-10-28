import React, { useState, useEffect } from 'react';
import ActivitiesTable from '../../components/ActivitiesTable/ActivitiesTable';
import StudentAPI from '../../utils/studentAPI';

const ViewActivities = ({ match }) => {
  const [studentActivities, setStudentActivities] = useState([]);

  useEffect(() => {
    getAllStudentActivties();
  }, []);

  const getAllStudentActivties = async () => {
    let student_id = match.params.student_id;
    const allActivities = await StudentAPI.getStudentActivities(student_id);
    setStudentActivities(allActivities.data.activities);
  };

    return (
        <ActivitiesTable activities={studentActivities}/>
    )
};

export default ViewActivities;
