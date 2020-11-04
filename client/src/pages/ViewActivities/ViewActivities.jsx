import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ActivitiesTable from '../../components/ActivitiesTable/ActivitiesTable';
import StudentAPI from '../../utils/studentAPI';
import Authenticated from '../layout/Authenticated/Authenticated';
import './viewActivities.css'

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
    <Authenticated>
      <Container id="activitiesContainer">
      <ActivitiesTable activities={studentActivities} />
      </Container>
      </Authenticated>
    )
};

export default ViewActivities;
